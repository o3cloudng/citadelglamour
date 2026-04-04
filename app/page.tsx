import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <Gallery />
      <ContactForm />
    </div>
  );
}
