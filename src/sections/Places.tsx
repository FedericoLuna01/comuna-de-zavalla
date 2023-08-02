'use client'

import MulticolorDivider from "@/components/MulticolorDivider"
import PlacesCard from "@/components/PlacesCard"
import { Container, Heading, Stack } from "@chakra-ui/react"

const Places = () => {
  return (
    <Stack
      as='section'
      id='lugares'
    >
      <Container
        maxW='container.xl'
      >
        <Stack
          minH='100vh'
          align='center'
          justify='center'
          py='20vh'
        >
          <Heading
            as='h1'
            variant='title'
            textAlign='center'
          >
            Lugares en Zavalla
          </Heading>
          <Stack
            gap={12}
          >
            <PlacesCard
            />
            <MulticolorDivider />
            <PlacesCard
              direction='row-reverse'
            />
            <MulticolorDivider />
            <PlacesCard
            />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}

export default Places