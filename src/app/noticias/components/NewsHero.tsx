'use client'

import { Container, Heading, Highlight, Stack } from "@chakra-ui/react"

const NewsHero = () => {
  return (
    <Stack
      as='section'
      pt={32}
    >
      <Container
        maxW='container.xl'
      >
        <Stack
          align='center'
          justify='center'
          mb={10}
        >
          <Heading
            as='h1'
            fontSize={{ base: '5xl', md: '6xl' }}
            lineHeight={1}
            textAlign='center'
            maxW='500px'
          >
            <Highlight
              query={'Zavalla'}
              styles={{
                color: 'primary.400',
              }}
            >
              Encontrá todas las noticias de Zavalla
            </Highlight>
          </Heading>
        </Stack>
      </Container>
    </Stack>
  )
}

export default NewsHero