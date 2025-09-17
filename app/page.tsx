

export default function Home() {
  return (
    <main className="font-poppins flex flex-col justify-around size-full min-h-[90vh] max-w-[1400px] mx-20">
      <div className="flex flex-wrap place-content-center h-[300px] relative">
        <img
          src="/images/home_banner.jpg"
          className="absolute inset-0 h-[300px] w-full object-cover object-center brightness-50"
        />
        <h2 className="font-cinzel text-5xl text-shadow-[0_0_10px_rgb(0_0_0_/_1)] z-99">
          Ne laisse plus passer aucun évènement auto
        </h2>
      </div>
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
