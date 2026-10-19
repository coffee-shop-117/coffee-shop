import { Header } from "@/widgets/header/ui/header/header";
import { Hero } from "@/widgets/hero/ui/hero/hero";
import { About } from "@/widgets/about/ui/about/about";
import { Menu } from "@/widgets/menu/ui/menu/menu";
import { Reviews } from "@/widgets/reviews/ui/reviews/reviews";
import { Gallery } from "@/widgets/gallery/ui/gallery/gallery";
import { Contacts } from "@/widgets/contacts/ui/contacts/contacts";
import { Footer } from "@/widgets/footer/ui/footer/footer";
import { Reveal } from "@/shared/ui/reveal/reveal";

export function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Menu />
        <Reviews />
        <Gallery />
        <Contacts />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
