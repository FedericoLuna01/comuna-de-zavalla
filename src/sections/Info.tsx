'use client'

import { Container, Heading, Stack, Text } from "@chakra-ui/react"
import { BsBusFrontFill } from "react-icons/bs"
import { GiMedicalPack, GiPoliceBadge } from 'react-icons/gi'
import { AiOutlineIdcard } from 'react-icons/ai'


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
          align='center'
          justify='center'
          pt='20vh'
        >
          <Heading
            as='h1'
            variant='title'
            textDecorationColor='logoBlue.100'
            textAlign='center'
          >
            Información útil
          </Heading>
          <Stack
            direction='row'
            justify='center'
            wrap='wrap'
            gap={12}
          >
            <Stack
              maxW='400px'
              direction='row'
              gap={8}
              border='2px solid #F2F2F2'
              p={6}
              borderRadius='.7rem'
            >
              <BsBusFrontFill color='#C4D42D' size={80} />
              <Stack>
                <Heading
                  as='h3'
                  fontSize='1.5rem'
                >
                  Colectivo
                </Heading>
                <Text>
                  Descargar horarios asdasd asdasdasd
                </Text>
              </Stack>
            </Stack>
            <Stack
              maxW='400px'
              direction='row'
              gap={8}
              border='2px solid #F2F2F2'
              p={6}
              borderRadius='.7rem'
            >
              <GiMedicalPack color='#C4D42D' size={80} />
              <Stack>
                <Heading
                  as='h3'
                  fontSize='1.5rem'
                >
                  Farmacia de turno
                </Heading>
                <Text>
                  Descargar horarios
                </Text>
              </Stack>
            </Stack>
            <Stack
              maxW='400px'
              direction='row'
              gap={8}
              border='2px solid #F2F2F2'
              p={6}
              borderRadius='.7rem'
            >
              <GiPoliceBadge color='#C4D42D' size={80} />
              <Stack>
                <Heading
                  as='h3'
                  fontSize='1.5rem'
                >
                  Policía
                </Heading>
                <Text>
                  Numero: 101 <br />
                  Dirección: texto de ejemplo <br />
                </Text>
              </Stack>
            </Stack>
            <Stack
              maxW='400px'
              direction='row'
              gap={8}
              border='2px solid #F2F2F2'
              p={6}
              borderRadius='.7rem'
            >
              <AiOutlineIdcard color='#C4D42D' size={80} />
              <Stack>
                <Heading
                  as='h3'
                  fontSize='1.5rem'
                >
                  Licencia de Conducir
                </Heading>
                <Text>
                  Numero: 101 <br />
                  Dirección: texto de ejemplo <br />
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}

export default Info