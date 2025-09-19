import { Metadata } from "next";
import EventCard from "./EventCard";
import { Event } from "./types";
import Banner from "@/ui/banner";

export const metadata: Metadata = {
  title: "Évènements",
  description: "Découvrez tous les événements automobiles près de chez vous grâce à notre liste complète. Ne manquez plus aucune rencontre passionnante du monde automobile !"
}

export default function Events() {
  const eventsList: Event[] = [
    {
      id: 1,
      title: "Concert de jazz",
      date: new Date("December 17, 2025 20:00:00"),
      address: "43 rue du Général de Gaulle",
      postalCode: 75150,
      city: "Paris",
      description: "Une soirée jazz exceptionnelle au cœur de Paris.",
    },
    {
      id: 2,
      title: "Conférence Tech",
      date: new Date("Septembre 29, 2025 16:00:00"),
      address: "7 avenue Foch",
      postalCode: 85000,
      city: "La Roche sur Yon",
      description: "Découvrez les dernières innovations tech.",
    },
    {
      id: 3,
      title: "Atelier Yoga",
      date: new Date("February 6, 2026 22:30:00"),
      address: "14 avenue du Marechal Joffre",
      postalCode: 77590,
      city: "Grisy Suisnes",
      description: "Un atelier pour se détendre et se reconnecter.",
    },
  ];

  return (
    <main className="font-poppins flex flex-col gap-[32px] size-full min-h-[90vh] max-w-[1400px] mx-20">
      <Banner imageSrc="/images/events_banner.jpg" title="Évènements" />
      <ul className="grid grid-cols-4 gap-8">
        {eventsList.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </ul>
    </main>
  );
}
