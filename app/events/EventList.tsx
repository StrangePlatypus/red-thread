'use client'
import EventCard from "./EventCard";
import { Event } from "./types";

export default function EventList() {
    
  const eventsList: Event[] = JSON.parse(sessionStorage.getItem('events')!);

  if (!eventsList){
    return (
        <h3 className="font-medium text-xl text-center">Aucun évènement à afficher pour l'instant</h3>
    )
  }

  return (
    <ul className="grid grid-cols-4 gap-8">
      {eventsList.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </ul>
  );
}
