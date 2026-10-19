import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main"
      className="container"
      style={{ paddingBlock: 100, minHeight: "100dvh" }}
    >
      <p className="section-label">404</p>
      <h1
        style={{
          fontSize: "clamp(40px, 7vw, 80px)",
          fontWeight: 450,
          letterSpacing: "-.05em",
        }}
      >
        Этой страницы нет.
        <br />А кофе — есть.
      </h1>
      <p style={{ marginBlock: 30, color: "var(--muted)" }}>
        Загляните на главную или посмотрите наше меню.
      </p>
      <Link
        href="/"
        style={{ textDecoration: "underline", textUnderlineOffset: 5 }}
      >
        Вернуться в кофейню
      </Link>
    </main>
  );
}
