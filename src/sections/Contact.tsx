'use client'

import Map from "@/components/Map"
import { INFO_ITEMS } from "@/data/data"
import { Container, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react"

const Contact = () => {
  return (
    <Stack
      id='contacto'
      as='section'
    >
      <Container
        maxW='container.xl'
      >
        <Stack
          minH='100vh'
          align='center'
          justify='center'
        >
          <Heading
            variant='title'
          >
            Contacto
          </Heading>
          <Grid
            templateColumns='repeat(3, 1fr)'
            gap={8}
            w='100%'
          >
            <GridItem colSpan={1}>
              <Stack
                bg='primary.100'
                borderRadius='.7rem'
                p={5}
                gap={4}
              >
                {
                  INFO_ITEMS.map(({ icon, id, label, title }) => (
                    <Stack
                      key={id}
                      gap={1}
                    >
                      <Heading
                        as='h3'
                        fontSize='1.5rem'
                      >
                        {title}
                      </Heading>
                      <Stack
                        direction='row'
                        align='center'
                      >
                        {icon}
                        <Text>
                          {label}
                        </Text>
                      </Stack>
                    </Stack>
                  ))
                }
              </Stack>
            </GridItem>
            <GridItem colSpan={2}>
              <Stack
                w='100%'
                h='100%'
              >
                <Map />
              </Stack>
            </GridItem>
          </Grid>
          <Stack
            direction='row'
            w='100%'
            justify='space-between'
          >
            {/* <Stack
              bg='primary.100'
              w='500px'
              h='500px'
            >

            </Stack>
            <Stack
              w='500px'
              h='500px'
            >
              <Map />
            </Stack> */}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}

export default Contact