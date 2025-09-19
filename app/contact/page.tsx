import ContactForm from "@/app/ContactForm";
import Banner from "@/ui/banner";

export default function Contact() {
  return (
    <main className="font-poppins flex flex-col flex-wrap gap-[32px] size-full min-h-[90vh] max-w-[1400px] mx-20">
        <Banner imageSrc="/images/contact_banner.jpg" title="Contactez-nous !" />
        <ContactForm />
    </main>
  );
}
