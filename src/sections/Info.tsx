'use client'

import { PHONES_ITEMS } from "@/data/data"
import { Container, Heading, Stack, Text } from "@chakra-ui/react"
import { GiMedicalPack } from 'react-icons/gi'

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
          my='20vh'
        >
          <Heading
            as='h1'
            variant='title'
            textDecorationColor='logoBlue.100'
            textAlign='center'
          >
            Teléfonos útiles
          </Heading>
          <Stack
            direction='row'
            justify='center'
            wrap='wrap'
            gap={12}
          >
            {
              PHONES_ITEMS.map(({ id, title, number, icon }) => (
                <Stack
                  key={id}
                  w='350px'
                  direction='row'
                  gap={8}
                  border='2px solid #F2F2F2'
                  p={6}
                  borderRadius='.7rem'
                >
                  {icon}
                  <Stack>
                    <Heading
                      as='h3'
                      fontSize='1.5rem'
                    >
                      {title}
                    </Heading>
                    <Text>
                      Número: {number}
                    </Text>
                  </Stack>
                </Stack>
              ))
            }
            <Stack
              w='350px'
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
                <Text
                  as='a'
                  href='/farmacias-de-turno.jpg'
                  download
                  _hover={{
                    textDecoration: 'underline',
                    color: 'primary.100'
                  }}
                >
                  Descargar horarios
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