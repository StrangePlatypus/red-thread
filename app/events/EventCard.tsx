import { Event } from "./types";

type EventCardProps = { event: Event };

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="w-full rounded-xl border border-(--brown) flex flex-col gap-2 text-sm">
      <h3 className="py-2 px-4 font-medium text-xl font-cinzel bg-(--brown) rounded-t-[10px]">
        {event.title}
      </h3>

      <div className="mx-4 py-2 border-b border-(--brown)">
        <p>Date : {event.date}</p>
        <p>
          Adresse : {event.address} {event.postalCode} {event.city}
        </p>
      </div>
      <div className="px-4 pb-4">
        <p>Description :</p>
        <p>{event.description}</p>
      </div>
    </div>
  );
}
