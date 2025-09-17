import type { Metadata } from "next";
import { Poppins, Cinzel } from "next/font/google";
import "./globals.css";
import { Enveloppe, Information, User } from "@/ui/icons";
import ContactForm from "./ContactForm";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  style: "normal",
  weight: ["500", "700", "900"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "500", "700", "900"],
  display: "swap",
  fallback: ["poppins"],
});

export const metadata: Metadata = {
  title: "Headgasket",
  description:
    "Trouvez et partagez les évênements automobiles qui vous font vibrer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  return (
    <html lang="fr">
      <body
        className={`${poppins.variable} ${cinzel.variable} antialiased min-h-screen flex flex-col justify-between items-center text-(--white)`}
      >
        <header className="font-poppins flex py-4 px-10 w-full justify-between sticky top-0 z-999 bg-background">
          <h1 className="font-cinzel text-3xl">Headgasket</h1>
          <nav className="flex items-center gap-20">
            <a href="/">
              Accueil
            </a>
            <a href="/events">
              Evênements
            </a>
            <a href="#contact">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2 hover:text-(--red)">
            <User />
            <a href="/login">Connexion</a>
          </div>
        </header>
        {children}

        <footer
          id="footer"
          className="flex font-poppins gap-10 flex-wrap items-center justify-center w-full py-4 px-10 mt-20 border-t border-(--brown)"
        >
          <div id="contact" className="flex flex-col gap-2">
            <p className="w-fit uppercase font-semibold">Contactez-nous !</p>
            <p className="w-fit">Une question, une remarque, un mot doux ?</p>
            <ContactForm />
          </div>
          <div id="informations" className="flex flex-col gap-2">
            <p>Informations générales :</p>
            <div className="flex gap-1 items-center"><Enveloppe /><a href="mailto:headgasket@gmail.com?subject=Contact">headgasket@gmail.com</a></div>
            <div className="flex gap-1 items-center"><Information /><a href="/">Mentions légales</a></div>
            
          </div>
        </footer>
      </body>
    </html>
  );
}
