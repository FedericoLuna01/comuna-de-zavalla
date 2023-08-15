'use client'

import LicenciaInfo from "@/sections/LicenciaInfo"
import { Container, Heading, Stack, Text } from "@chakra-ui/react"
import Image from "next/image"

const page = () => {
  return (
    <>
      <Stack
        as='section'
      >
        <Container
          maxW='container.xl'
        >
          <Stack
            align='center'
            justify='space-between'
            minH='70vh'
            direction={{ base: 'column', lg:'row' }}
            py={{ base: '15vh', lg: 0 }}
            gap={{ base: 14, lg: 0 }}
          >
            <Stack
              justify={{ base: 'flex-start', lg: 'center' }}
              maxW='550px'
              textAlign={{ base: 'center', lg: 'left' }}
            >
              <Heading
                as='h1'
                fontSize={{ base: '4xl', lg: '6xl' }}
                lineHeight={1}
              >
                      Obtené tu licencia de conducir
              </Heading>
              <Text
                fontSize={{ base: '1rem', lg: '1.1rem' }}
              >
                    Con la inaguración de el Centro de Otorgamiento de Licencias de conducir ahora vas a poder obtener tu licencia de conducir en Zavalla.
                    En esta sección vas a encontrar toda la información necesaria para obtenerla.
              </Text>
            </Stack>
            <Stack>
              <Image
                src='/grupal.jpg'
                alt='Grupal'
                width={500}
                height={500}
                className="image"
              />
            </Stack>
          </Stack>
        </Container>
      </Stack>
      <LicenciaInfo />
    </>

  )
}

export default page