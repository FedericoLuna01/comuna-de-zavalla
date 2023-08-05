import Carnet from "@/sections/Carnet"
import Contact from "@/sections/Contact"
import Hero from "@/sections/Hero"
import Info from "@/sections/Info"
import NewProjects from "@/sections/NewProjects"
import Places from "@/sections/Places"
import Socials from "@/sections/Socials"
import Whatsapp from "@/sections/Whatsapp"

const page = () => {
  return (
    <>
      <Hero />
      <Carnet />
      <Places />
      <Whatsapp />
      <NewProjects />
      <Socials />
      <Info />
      <Contact />
    </>
  )
}

export default page