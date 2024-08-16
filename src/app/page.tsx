import Banner from "@/components/general/banner";
import ComponentOne from "@/components/general/component-one";
import ComponentTwo from "@/components/general/component-two";
import ContactComponent from "@/components/general/contact-component";

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
