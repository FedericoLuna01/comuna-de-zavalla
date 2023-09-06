'use client'

import { Button, Container, Heading, Highlight, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";

const arrowVariants = {
  animate: {
    y: [0, 10, 0],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 2,
        ease: "linear",
      },
    },
  }
}

const Hero = () => {
  return (
    <Stack
      as='section'
      bg='bg.200'
      id='inicio'
      mb='20vh'
    >
      <Container
        maxW='container.xl'
      >
        <Stack
          minH='100vh'
          direction={{ base: 'column', md: 'row' }}
          align='center'
          justify='center'
          pos='relative'
          gap={{ base: 10, md: 20 }}
          py={{ base: '20vh', md: 0 }}
        >
          <Stack
            w={{ base: '100%', md: '50%' }}
            align={{ base: 'center', md: 'flex-start' }}
          >
            <Stack
              maxW='550px'
              gap={8}
              textAlign={{ base: 'center', md: 'left' }}
              align={{ base: 'center', md: 'flex-start' }}
            >
              <Stack
                gap={0}
              >
                <Text
                  variant='above-title'
                >
                Zavalla Crece
                </Text>
                <Heading
                  as='h1'
                  fontSize={{ base: '5xl', md: '6xl' }}
                  lineHeight={1}
                >
                  <Highlight
                    query={'Zavalla'}
                    styles={{
                      color: 'primary.100',
                    }}
                  >
                    Bienvenidos a la
                    Comuna de Zavalla
                  </Highlight>
                </Heading>
              </Stack>
              <Text
                fontSize='1.1rem'
              >
                Zavalla es una localidad del departamento de Rosario, provincia de Santa Fe.
                Localizada sobre la RN 33, limita al este con la ciudad de Perez, al oeste con Pujato
                y se encuentra a 22 KM al sudoeste de la ciudad de Rosario.
              </Text>
              <Button
                as='a'
                href='#'
                w='fit-content'
                size='lg'
                variant='default'
              >
                Descubrí más!
              </Button>
            </Stack>
          </Stack>
          <Stack
            w={{ base: '100%', md: '50%' }}
            align={{ base: 'center', md: 'flex-end' }}
            gap={{ base: 10, md: 20 }}
          >
            <Image
              src='/comuna-de-zavalla.jpg'
              alt='Comuna de Zavalla'
              width={500}
              height={500}
              className="image"
            />
            <Image
              src='/cartel-de-zavalla.jpg'
              alt='Cartel de Zavalla'
              width={500}
              height={500}
              className="image"
            />
          </Stack>
          <motion.div
            variants={arrowVariants}
            animate='animate'
            style={{
              transform: 'translate(0, -50%)',
              position: 'absolute',
              bottom: '3rem'
            }}
          >
            <Stack
              as='a'
              href='#lugares'
            >
              <Image
                src='/icons/double-arrow-down.svg'
                alt='Scroll down'
                width={50}
                height={50}
              />
            </Stack>
          </motion.div>
        </Stack>
      </Container>
    </Stack>
  );
}

export default Hero;