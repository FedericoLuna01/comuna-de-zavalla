'use client'

import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Container, Heading, Stack, Text } from "@chakra-ui/react"

const ACCORDION_ITEMS = [
  {
    id: 1,
    title: 'Cuál es el horario de atención?',
    content: 'De lunes a viernes de 7 a 13hs',
    color: 'primary.100'
  },
  {
    id: 2,
    title: 'Hay un número de atención?',
    content: 'Si, podés llamar al 3416515933',
    color: 'primary.100'
  },
  {
    id: 3,
    title: 'Que documentación necesito?',
    content: 'Necesitas llevar una fotocopia de tu DNI, frente y dorso, y tu carnet de conducir',
    color: 'primary.100'
  },
  {
    id: 4,
    title: 'A donde debo ir?',
    content: 'Bv. Terugi y Moreno, en el galpón',
    color: 'primary.100'
  },
]

const page = () => {
  return (
    <Stack
      as='section'
    >
      <Container
        maxW='container.xl'
      >
        <Stack
          align='center'
          justify='center'
          minH='100vh'
          mt={12}
        >
          <Stack
            direction='row'
            w='100%'
            justify='space-between'
            align='center'
          >
            <Stack
              w='50%'
            >
              <Heading
              >
                Tu licencia de conducir
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate tempore officia impedit eveniet tenetur maxime ad facilis natus ea fugiat consequuntur hic iure placeat amet expedita iste, itaque dignissimos quia vitae ipsum totam blanditiis quos? Error, quidem incidunt! Fuga?
              </Text>
            </Stack>
            <Stack
              w={400}
              h={800}
              align='center'
              justify='center'
            >
              <video style={{
                boxShadow: `5px 5px 0 #C4D42D`,
              }} src="/turnos-carnet.mp4" controls></video>
            </Stack>
          </Stack>
          <Stack
            align='center'
            py='20vh'
          >
            <Heading
              textAlign='center'
            >
              Todo lo que necesitas saber
            </Heading>
            <Stack>

            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}

export default page