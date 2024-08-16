import Banner from "@/components/banner";
import ComponentOne from "@/components/component-one";
import ComponentTwo from "@/components/component-two";
import ContactComponent from "@/components/contact-component";

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
