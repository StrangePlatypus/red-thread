import { Metadata } from "next";
import Banner from "@/ui/banner";
import EventList from "./EventList";

export const metadata: Metadata = {
  title: "Évènements",
  description: "Découvrez tous les événements automobiles près de chez vous grâce à notre liste complète. Ne manquez plus aucune rencontre passionnante du monde automobile !"
}

export default function Events() {

  return (
    <main className="font-poppins flex flex-col gap-[32px] size-full min-h-[90vh] max-w-[1400px] mx-20">
      <Banner imageSrc="/images/events_banner.jpg" title="Évènements" />
      <EventList />
    </main>
  );
}
