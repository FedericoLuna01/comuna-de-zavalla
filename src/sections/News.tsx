'use client'

import { Button, Link as ChakraLink, Container, Heading, Stack, Text } from "@chakra-ui/react"

import NewsGrid from "@/components/NewsGrid"
import { NEWS_ITEMS } from "@/data/data"
import Link from "next/link"

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
            as='h2'
            variant='title'
            textDecorationColor='logoYellow.100'
            textAlign='center'
          >
            Noticias de la Comuna
          </Heading>
          <Stack
            align='center'
            justify='space-between'
            gap={4}
            maxW='500px'
            textAlign='center'
            mb='3rem'
          >
            <Text>
              En esta sección encontrarás artículos con las noticias mas relevantes de la Comuna.
            </Text>
            <Button
              colorScheme="primary"
              as={Link}
              href='/noticias'
            >
              Ver todas →
            </Button>

          </Stack>

          <NewsGrid news={newsToDisplay} />
        </Stack>
      </Container>
    </Stack>
  )
}

export default NewProjects