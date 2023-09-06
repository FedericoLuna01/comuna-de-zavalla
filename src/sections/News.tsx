'use client'

import ProjectsCard from "@/components/ProjectsCard"
import { NEWS_ITEMS } from "@/data/data"
import { Container, Heading, Stack } from "@chakra-ui/react"

const NewProjects = () => {
  return (
    <Stack
      id='noticias'
      as='section'
    >
      <Container
        maxW='container.xl'
      >
        <Stack
          align='center'
          justify='center'
          my='20vh'
        >
          <Heading
            as='h1'
            variant='title'
            textDecorationColor='logoYellow.100'
            textAlign='center'
          >
            Noticias de la Comuna
          </Heading>
          <Stack
            direction='row'
            gap={12}
            justify='center'
            wrap='wrap'
          >
            {
              NEWS_ITEMS.map((item) => {
                return (
                  <ProjectsCard
                    key={item.id}
                    title={item.title}
                    category={item.category}
                    description={item.description}
                    img={item.img}
                  />
                )
              })
            }
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}

export default NewProjects