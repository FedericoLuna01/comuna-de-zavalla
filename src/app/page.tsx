import Carnet from "@/sections/Carnet";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Impuestos from "@/sections/Impuestos";
import Info from "@/sections/Info";
import NewProjects from "@/sections/News";
import Socials from "@/sections/Socials";
import Whatsapp from "@/sections/Whatsapp";

const page = () => {
  return (
    <>
      <Hero />
      <Impuestos />
      <Carnet />
      <NewProjects />
      <Whatsapp />
      <Info />
      <Socials />
      <Contact />
    </>
  );
};

export default page;
