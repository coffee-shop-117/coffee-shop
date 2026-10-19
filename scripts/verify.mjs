import { readdir, readFile, access } from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";
import ts from "typescript";

const root = process.cwd();
const layers = ["app", "views", "widgets", "features", "entities", "shared"];
async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map((entry) => entry.isDirectory()
    ? walk(path.join(directory, entry.name)) : path.join(directory, entry.name)))).flat();
}

const sourceFiles = await walk(path.join(root, "src"));
let imports = 0;
const assets = new Set();
for (const file of sourceFiles) {
  const source = await readFile(file, "utf8");
  const [layer, slice] = path.relative(path.join(root, "src"), file).split(path.sep);
  assert(!/\b(?:linear|radial|conic)-gradient\s*\(/i.test(source), `Gradient found: ${file}`);
  for (const match of source.matchAll(/(?:from\s*|import\s*)["'](@\/[^"']+|\.[^"']+)["']/g)) {
    const target = match[1].startsWith("@/") ? path.join(root, "src", match[1].slice(2)) : path.resolve(path.dirname(file), match[1]);
    const [targetLayer, targetSlice] = path.relative(path.join(root, "src"), target).split(path.sep);
    assert(layers.indexOf(targetLayer) >= layers.indexOf(layer), `Upward FSD import: ${file} -> ${match[1]}`);
    if (layer === targetLayer && !["app", "shared"].includes(layer)) {
      assert(slice === targetSlice || match[1].includes("/@x/"), `Cross-slice import: ${file} -> ${match[1]}`);
    }
    imports++;
  }
  for (const match of source.matchAll(/["'](\/images\/[^"']+\.(?:webp|jpg|png))["']/g)) assets.add(match[1]);
}
await Promise.all([...assets].map((asset) => access(path.join(root, "public", asset))));
const model = await readFile(path.join(root, "src/entities/menu/model/menu.ts"), "utf8");
const { outputText } = ts.transpileModule(model, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } });
const { menu } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
assert.equal(menu.length, 19, "All 19 source menu entries must remain available");
assert.equal(new Set(menu.map((item) => item.id)).size, 19, "Menu IDs must be unique");
assert(menu.every((item) => item.price > 0 && item.portion && item.image), "Each item needs a price, portion and photo");
assert(!sourceFiles.some((file) => /\bindex\.tsx?$/.test(file)), "Keep direct file imports without barrels");
console.log(`Verified ${imports} imports, FSD direction, ${assets.size} image paths, 19 menu items, and zero gradients.`);
