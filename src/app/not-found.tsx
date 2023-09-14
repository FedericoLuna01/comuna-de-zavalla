'use client'

import { Button, Container, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

const NotFound = () => {
  return (
    <Stack
      as='section'
    >
      <Container
        maxW='container.xl'
      >
        <Stack
          minH='90vh'
          align='center'
          justify='center'
          gap={{ base: 10, md: 20 }}
        >
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            align='center'
            gap={8}
          >
            <Image
              src='/404-illustration.svg'
              width={500}
              height={500}
              alt='Ilustración de página no encontrada'
            />
            <Stack
              direction='column'
              align={{ base: 'center', lg: 'flex-start' }}
              gap={8}
            >
              <Text
                fontWeight='bold'
                fontSize={{ base: '2xl', md: '3xl' }}
                maxW='500px'
                textAlign={{ base: 'center', lg: 'left' }}
              >
                No pudimos encontrar la página que estabas buscando.
              </Text>
              <Button
                colorScheme='primary'
                w={{ base: '100%', md: 'fit-content' }}
                as={Link}
                href='/'
              >
                Volver al inicio
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}

export default NotFound