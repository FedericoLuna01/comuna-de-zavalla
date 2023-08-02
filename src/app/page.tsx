import Contact from "@/sections/Contact"
import Hero from "@/sections/Hero"
import Info from "@/sections/Info"
import NewProjects from "@/sections/NewProjects"
import Places from "@/sections/Places"
import Whatsapp from "@/sections/Whatsapp"

const page = () => {
  return (
    <>
      <Hero />
      <Places />
      <Whatsapp />
      <NewProjects />
      <Contact />
      <Info />
    </>
  )
}

export default page