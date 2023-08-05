'use client'

import { Button, Heading, Highlight, Stack, Text } from "@chakra-ui/react";
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
      <Stack
        minH='100vh'
        direction={{ sm: 'column', md: 'row' }}
        align='center'
        justify='center'
        pos='relative'
      >
        <Stack
          w='50%'
          align='center'
          pl='5rem'
        >
          <Stack
            maxW='550px'
            gap={8}
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
                fontSize='6xl'
                lineHeight={1}
              >
                <Highlight
                  query={'Zavalla'}
                  styles={{
                    color: 'primary.100',
                  }}
                >
                  Bienvenido a la
                  Comuna de Zavalla
                </Highlight>
              </Heading>
            </Stack>
            <Text
              fontSize='1.1rem'
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas debitis culpa excepturi aperiam non laboriosam
              asperiores quibusdam maxime. Repudiandae, possimus.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas debitis culpa excepturi aperiam non laboriosam
              asperiores quibusdam maxime. Repudiandae, possimus.
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
          w='50%'
          align='center'
        >
          <Image
            src='https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80'
            alt='Comuna de Zavalla'
            width={400}
            height={400}
          />
          <Image
            src='https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80'
            alt='Comuna de Zavalla'
            width={400}
            height={400}
          />
          <Image
            src='https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80'
            alt='Comuna de Zavalla'
            width={400}
            height={400}
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
    </Stack>
  );
}

export default Hero;