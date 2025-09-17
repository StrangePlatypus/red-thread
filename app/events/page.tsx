import EventCard from "./EventCard";
import { Event } from "./types";
import eventsBanner from "../../public/images/events_banner.jpg"

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
      <div className="flex flex-wrap place-content-center h-[300px] relative">
        <img src="/images/events_banner.jpg" className="absolute inset-0 h-[300px] w-full object-cover object-center brightness-50"/>
        <h2 className="font-cinzel text-5xl text-shadow-[0_0_10px_rgb(0_0_0_/_1)] z-99">Évènements</h2>
      </div>

      <ul className="grid grid-cols-4 gap-8">
        {eventsList.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </ul>
    </main>
  );
}
