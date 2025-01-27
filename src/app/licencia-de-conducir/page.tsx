'use client'

import { Container, Heading, Stack, Text } from "@chakra-ui/react"
import Image from "next/image"

import LicenciaInfo from "@/sections/LicenciaInfo"
import SideReveal from "@/components/Reveals/SideReveal"

export default function LicenciaPage() {
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
            <SideReveal>
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
            </SideReveal>
            <SideReveal
              side='right'
            >
              <Stack>
                <Image
                  src='/licencia.webp'
                  alt='Acto de inaguracion galpon de licencias de conducir'
                  width={500}
                  height={500}
                  className="image"
                />
              </Stack>
            </SideReveal>
          </Stack>
        </Container>
      </Stack>
      <LicenciaInfo />
    </>

  )
}
