'use client'

import { Button, Heading, Highlight, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const Hero = () => {
  return (
    <Stack
      as='section'
      bg='bg.200'
      id='inicio'
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
          pos='relative'
          overflow='hidden'
        >
          <Stack
            pos='absolute'
            right='90%'
            top='-20%'
            zIndex={1}
            height='1500px'
            width='600px'
            bgColor='bg.100'
            borderRadius='50%'
          />
          <Image
            src='/comuna-de-zavalla.png'
            alt='Comuna de Zavalla'
            width={600}
            height={600}
            style={{
              zIndex: 0
            }}
          />
        </Stack>
        <Stack
          pos='absolute'
          bottom={10}
          zIndex={3}
        >
          <Image
            src='/icons/double-arrow-down.svg'
            alt='Scroll down'
            width={50}
            height={50}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Hero;