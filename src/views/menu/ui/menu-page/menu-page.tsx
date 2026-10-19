import Link from "next/link";
import { Header } from "@/widgets/header/ui/header/header";
import { Menu } from "@/widgets/menu/ui/menu/menu";
import { Contacts } from "@/widgets/contacts/ui/contacts/contacts";
import { Footer } from "@/widgets/footer/ui/footer/footer";

export function MenuPage() {
  return (
    <>
      <Header />
      <main id="main">
        <nav className="container breadcrumbs" aria-label="Хлебные крошки">
          <Link href="/">Главная</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Меню</span>
        </nav>
        <Menu full />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
