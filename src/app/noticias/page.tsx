import { Metadata } from "next"
import NewsHero from "./components/NewsHero"
import NewsSection from "./components/NewsSection"

export const metadata: Metadata = {
  title: 'Comuna de Zavalla - Noticias',
  description: 'En este apartado de la página web se encuentran todas las noticias de la comuna de Zavalla.',

}

const NewsPage = () => {
  return (
    <div>
      <NewsHero />
      <NewsSection />
    </div>
  )
}

export default NewsPage