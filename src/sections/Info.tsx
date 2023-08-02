'use client'

import { Container, Heading, Stack } from "@chakra-ui/react"

const Info = () => {
  return (
    <Stack
      as="section"
      id="info"
    >
      <Container
        maxW="container.xl"
      >
        <Stack
          minH='100vh'
          align='center'
          justify='center'
        >
          <Heading
            as='h1'
            variant='title'
          >
            Información útil
          </Heading>
        </Stack>
      </Container>
    </Stack>
  )
}

export default Info