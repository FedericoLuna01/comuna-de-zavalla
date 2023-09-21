import { Grid } from "@chakra-ui/react"
import { AnimatePresence, motion } from 'framer-motion'

import { type News } from "@/types/types"
import ProjectsCard from "./ProjectsCard"

interface NewsGridProps {
  news: News[]
}

const NewsGrid: React.FC<NewsGridProps> = ({ news }) => {
  return (
    <AnimatePresence>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={8}
        alignSelf='center'
      >
        {
          news.map(({ category, description, img, title, id }) => (
            <motion.div
              key={id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectsCard
                category={category}
                description={description}
                img={img}
                title={title}
              />
            </motion.div>
          ))
        }
      </Grid>
    </AnimatePresence>
  )
}

export default NewsGrid