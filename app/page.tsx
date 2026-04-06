import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import LocationMap from "@/components/LocationMap";
export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <Gallery />
      <LocationMap />
      <ContactForm />
    </div>
  );
}
