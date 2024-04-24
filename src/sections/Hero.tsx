"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  Highlight,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";
import SideReveal from "@/components/Reveals/SideReveal";

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
  },
};

const Hero = () => {
  return (
    <Stack as="section" bg="bg.200" id="inicio" mb="20vh">
      <Container maxW="container.xl">
        <Stack
          minH="100vh"
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
          pos="relative"
          gap={{ base: 10, md: 20 }}
          py={{ base: "20vh", md: 0 }}
        >
          <Stack
            w={{ base: "100%", md: "50%" }}
            align={{ base: "center", md: "flex-start" }}
          >
            <SideReveal>
              <Stack
                maxW="550px"
                gap={8}
                textAlign={{ base: "center", md: "left" }}
                align={{ base: "center", md: "flex-start" }}
              >
                <Stack gap={0}>
                  <Text variant="above-title">Zavalla Crece</Text>
                  <Heading
                    as="h1"
                    fontSize={{ base: "5xl", md: "6xl" }}
                    lineHeight={1}
                  >
                    <Highlight
                      query={"Zavalla"}
                      styles={{
                        color: "primary.400",
                      }}
                    >
                      Bienvenidos a la Comuna de Zavalla
                    </Highlight>
                  </Heading>
                </Stack>
                <Text fontSize="1.1rem">
                  Zavalla es una localidad del departamento de Rosario,
                  provincia de Santa Fe. Localizada sobre la RN 33, limita al
                  este con la ciudad de Pérez, al oeste con Pujato y se
                  encuentra a 22 KM al sudoeste de la ciudad de Rosario.
                </Text>
                <Button
                  as="a"
                  href="#noticias"
                  w="fit-content"
                  size="lg"
                  colorScheme="primary"
                >
                  Descubrí más!
                </Button>
              </Stack>
            </SideReveal>
          </Stack>

          <Stack
            w={{ base: "100%", md: "50%" }}
            align={{ base: "center", md: "flex-end" }}
            gap={{ base: 10, md: 20 }}
          >
            <Box
              aspectRatio={16 / 9}
              width={{ base: "100%", md: "80%" }}
              pos="relative"
            >
              <SideReveal side="right" height="100%" width="100%">
                <Image
                  src="/comuna-de-zavalla.webp"
                  alt="Comuna de Zavalla"
                  fill
                  className="image"
                />
              </SideReveal>
            </Box>
            <Box
              aspectRatio={16 / 9}
              width={{ base: "100%", md: "80%" }}
              pos="relative"
            >
              <SideReveal
                side="right"
                height="100%"
                width="100%"
                delayIndex={1}
              >
                <Image
                  src="/cartel-de-zavalla.webp"
                  alt="Cartel de Zavalla"
                  fill
                  className="image"
                />
              </SideReveal>
            </Box>
          </Stack>
          <motion.div
            variants={arrowVariants}
            animate="animate"
            style={{
              transform: "translate(0, -50%)",
              position: "absolute",
              bottom: "3rem",
            }}
          >
            <Stack as="a" href="#noticias">
              <Image
                src="/icons/double-arrow-down.svg"
                alt="Scroll down"
                width={50}
                height={50}
              />
            </Stack>
          </motion.div>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Hero;
