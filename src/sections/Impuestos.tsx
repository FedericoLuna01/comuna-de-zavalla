"use client";

import { Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Impuestos = () => {
  return (
    <Container maxW="container.xl" w="100%">
      <Stack pb={"20vh"}>
        <Heading
          as="h2"
          variant="title"
          textDecorationColor="logoPurple.100"
          textAlign="center"
        >
          Paga tus impuestos
        </Heading>
        <Stack alignItems="center" direction={{ base: "column", lg: "row" }}>
          <Image
            src="/impuestos.svg"
            alt="Impuestos"
            width={450}
            height={450}
          />
          <Stack px={{ base: 2, md: 16 }}>
            <Text maxW={"40rem"} fontSize={{ base: "1rem", md: "1.2rem" }}>
              Paga impuestos y servicios de manera fácil y rápida en línea.
              Olvídate de las filas y trámites tediosos. Nuestra plataforma
              segura te permite hacer tus transacciones desde donde estés, las
              24/7. Simplifica tu vida con nuestros servicios de pago en línea
              hoy mismo.
            </Text>
            <Button
              as={Link}
              href="https://www.municipalidad.com/zava/home/menu"
              colorScheme="primary"
              target="_blank"
            >
              Pagar servicios
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Impuestos;
