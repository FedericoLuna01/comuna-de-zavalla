import { Grid } from "@chakra-ui/react"

import { type News } from "@/types/types"
import ProjectsCard from "./ProjectsCard"

interface NewsGridProps {
  news: News[]
}

const NewsGrid: React.FC<NewsGridProps> = ({ news }) => {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
      gap={8}
      alignSelf='center'
    >
      {
        news.map(({ category, description, img, title, id }) => (
          <ProjectsCard
            key={id}
            category={category}
            description={description}
            img={img}
            title={title}
          />
        ))
      }
    </Grid>
  )
}

export default NewsGrid