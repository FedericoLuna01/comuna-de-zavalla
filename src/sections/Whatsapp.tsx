'use client'

import { Button, Container, Heading, Stack } from "@chakra-ui/react"
import Image from "next/image"
import { RiWhatsappFill } from 'react-icons/ri';
const Whatsapp = () => {
  return (
    <Stack>
      <Container
        maxW='container.xl'
      >
        <Stack
          bg='primary.100'
          borderRadius='.60rem'
          pos='relative'
          direction='row'
          justify='space-between'
        >
          <Stack
            p={10}
            justify='space-between'
          >
            <Stack>
              <Heading
                as='h1'
              >
                Nuevo WhatsApp!
              </Heading>
              <Heading
                as='h3'
                size='lg'
                fontWeight='semibold'
                color='secondary.100'
              >
                Eribinos en nuestro Whatsapp. Mediante este medio podras comunicarte con nosotros de manera directa y rapida.
              </Heading>
            </Stack>
            <Button
              colorScheme='gray'
              leftIcon={<RiWhatsappFill size='30px' color='#25D366' />}
              width='fit-content'
              size='lg'
            >
              Escribinos ahora!
            </Button>
          </Stack>
          <Image
            src='/2711935.png'
            alt='Whatsapp Illustration'
            width={300}
            height={300}
            style={{
              borderRadius: '.60rem'
            }}
          />
        </Stack>
      </Container>
    </Stack>
  )
}

export default Whatsapp