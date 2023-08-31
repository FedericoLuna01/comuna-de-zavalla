'use client'

import MulticolorDivider from "@/components/MulticolorDivider"
import PlacesCard from "@/components/PlacesCard"
import { PLACES_ITEMS } from "@/data/data"
import { Container, Heading, Stack } from "@chakra-ui/react"
import React from "react"

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
          my='20vh'
        >
          <Heading
            as='h1'
            variant='title'
            textDecorationColor='logoRed.100'
            textAlign='center'
          >
            ¿Que visitar en Zavalla?
          </Heading>
          <Stack
            gap={12}
          >
            {
              PLACES_ITEMS.map(({ id, title, description, image }) => (
                <React.Fragment
                  key={id}
                >
                  <PlacesCard
                    title={title}
                    description={description}
                    ubication='Zavalla, Santa Fe'
                  />
                  <MulticolorDivider />
                </React.Fragment>
              ))
            }

          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}

export default Places