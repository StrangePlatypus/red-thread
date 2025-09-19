import Banner from "@/ui/banner";
import { Metadata } from "next";
import FormEvent from "./FormEvent";

export const metadata: Metadata = {
  title: "Tableau de bord",
  description: "Gérez vos évènements et vos informations personnelles.",
};

export default function Dashboard() {
  return (
    <main className="font-poppins flex flex-col flex-wrap gap-[32px] size-full min-h-[90vh] max-w-[1400px] mx-20">
      <Banner imageSrc="/images/dashboard_banner.jpg" title="Tableau de bord" />
      <div className="flex gap-10">
        <div className="flex-2 flex flex-col">
          <h3 className="font-medium text-xl font-cinzel text-center">
            Ajouter un évènement
          </h3>
          <FormEvent />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-xl font-cinzel text-center">
            Mes informations
          </h3>
          <div className="p-6 flex flex-col gap-4">
            <p>Nom: Dupont</p>
            <p>Prénom: Jean-Marie</p>
            <p>Email: jmdupont@hotmail.fr</p>
          </div>
        </div>
      </div>
    </main>
  );
}
