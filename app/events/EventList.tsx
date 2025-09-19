'use client'
import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { Event } from "./types";

export default function EventList() {
  const [eventsList, setEventsList] = useState<Event[]>();

  useEffect(() => {
  if (typeof window !== "undefined") {
    const stored = sessionStorage.getItem("events");
    if (stored) {
      setEventsList(JSON.parse(stored));
    }
  }
}, []);

function deleteEvent(id: string){
  const updatedEvents = eventsList?.filter((event) => event.id !== id)
  sessionStorage.setItem("events", JSON.stringify(updatedEvents))
  setEventsList(JSON.parse(sessionStorage.getItem("events")!))
}

  if (!eventsList){
    return (
        <h3 className="font-medium text-xl text-center">Aucun évènement à afficher pour l'instant</h3>
    )
  }

  return (
    <ul className="grid grid-cols-4 gap-8">
      {eventsList.map((event, index) => (
        <EventCard key={index} event={event} deleteEvent={deleteEvent}/>
      ))}
    </ul>
  );
}
