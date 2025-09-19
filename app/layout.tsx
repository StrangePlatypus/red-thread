import type { Metadata } from "next";
import { Poppins, Cinzel } from "next/font/google";
import "./globals.css";
import { Enveloppe, Information, User } from "@/ui/icons";

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
        {/* <Modal /> */}
        <header className="font-poppins flex py-4 px-10 w-full justify-between sticky top-0 z-999 bg-background">
          <h1 className="font-cinzel text-3xl">Headgasket</h1>
          <nav className="flex items-center gap-20">
            <a href="/">Accueil</a>
            <a href="/events">Evênements</a>
            <a href="/contact">Contact</a>
          </nav>
          <div className="flex items-center gap-2 hover:text-(--red)">
            <User />
            <a href="/dashboard">Dashboard</a>
          </div>
        </header>
        {children}
        <footer className="flex justify-around w-full py-6">
            <div className="flex gap-1 items-center">
              <Enveloppe />
              <p>Contactez-nous par mail :</p>
              <a href="mailto:headgasket@gmail.com?subject=Contact">
                headgasket@gmail.com
              </a>
            </div>
            <div className="flex gap-1 items-center">
              <Information />
              <p>Mentions légales</p>
            </div>
        </footer>
      </body>
    </html>
  );
}
