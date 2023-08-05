'use client'

import { Container, Heading, Stack } from "@chakra-ui/react"

const page = () => {
  return (
    <Stack>
      <Container
        maxW='container.xl'
      >
        <Stack
          align='center'
          justify='center'
          minH='100vh'
          direction='row'
        >
          <Stack>
            <Heading>
              Tu licencia de conducir
            </Heading>
          </Stack>
          <Stack
            bg='gray.200'
            w='400px'
            h='800px'
          ><h1>Video</h1></Stack>
        </Stack>
      </Container>
    </Stack>
  )
}

export default page