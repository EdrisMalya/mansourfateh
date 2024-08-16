import Banner from "@/components/banner";
import ComponentOne from "@/components/ComponentOne";
import ComponentTwo from "@/components/component-two";
import ContactComponent from "@/components/contact-component";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className={"max-w-7xl mx-auto mt-32"}>
        <ComponentOne />
        <ComponentTwo />
      </div>
      <ContactComponent />
    </main>
  );
}
