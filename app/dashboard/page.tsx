import Banner from "@/ui/banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tableau de bord",
  description: "Gérez vos évènements et vos informations personnelles."
}

export default function Dashboard() {

  return (
    <main className="font-poppins flex flex-col flex-wrap gap-[32px] size-full min-h-[90vh] max-w-[1400px] mx-20">
      <Banner imageSrc="/images/dashboard_banner.jpg" title="Tableau de bord" />
    </main>
  );
}
