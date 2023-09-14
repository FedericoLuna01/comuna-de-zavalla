'use client'

import { Container, Heading, Stack } from "@chakra-ui/react"

import NewsGrid from "@/components/NewsGrid"
import { NEWS_ITEMS } from "@/data/data"

const NewProjects = () => {
  const newsToDisplay = NEWS_ITEMS.slice(0, 3)
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
          <NewsGrid news={newsToDisplay} />
        </Stack>
      </Container>
    </Stack>
  )
}

export default NewProjects