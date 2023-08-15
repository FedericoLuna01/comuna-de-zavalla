'use client'

import { INFO_ITEMS } from "@/data/data"
import { Container, Heading, Stack, StackDivider, Text } from "@chakra-ui/react"
import dynamic from "next/dynamic"

const Map = dynamic(() => import('../components/Map'), { ssr: false })

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
          align='center'
          justify='center'
          py='20vh'
        >
          <Heading
            variant='title'
            as='h1'
            textDecorationColor='logoPurple.100'
            textAlign='center'
          >
            Contacto
          </Heading>
          <Stack
            direction='row'
            divider={<StackDivider />}
            pb={12}
            gap={8}
            wrap='wrap'
            justify='center'
          >
            {
              INFO_ITEMS.map(({ icon, id, label, title }) => (
                <Stack
                  key={id}
                  align='center'
                  justify='center'
                  maxW='200px'
                  maxH='180px'
                  textAlign='center'
                >
                  {icon}
                  <Heading
                    as='h3'
                    size='md'
                  >
                    {title}
                  </Heading>
                  <Text>
                    {label}
                  </Text>
                </Stack>
              ))
            }
          </Stack>
          <Stack
            w='100%'
            h='30vh'
          >
            <Map />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}

export default Contact