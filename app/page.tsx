import Banner from "@/ui/banner";


export default function Home() {
  return (
    <main className="font-poppins flex flex-col justify-between size-full min-h-[90vh] max-w-[1400px] mx-20 pb-30">
      <Banner imageSrc="/images/home_banner.jpg" title="Ne laisse plus passer aucun évènement auto" />
      
      <p className="text-center max-w-[1000px] mx-auto">
        Que tu sois amateur de courses, de rassemblements de voitures anciennes,
        de drift, ou simplement curieux de découvrir de nouveaux rendez-vous,
        HeadGasket te permet de retrouver facilement les événements qui te
        correspondent.
      </p>
      <a href="/events" className="self-center w-fit flex gap-1 items-center animate-pulse hover:animate-none">Trouve ton évènement</a>
    </main>
  );
}
