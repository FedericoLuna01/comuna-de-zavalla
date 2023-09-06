'use client'

import { Container, Stack } from "@chakra-ui/react";
import Logo from "./Logo";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <Stack
      pos='fixed'
      w='100%'
      h='75px'
      bg='bg.100'
      borderBottom='2px solid'
      borderColor='primary.100'
      as='header'
      zIndex='99999'
    >
      <Container
        maxW='container.xl'
        h='100%'
      >
        <Stack
          align='center'
          justify='space-between'
          direction='row'
          h='100%'
        >
          <Logo />
          <Nav />
        </Stack>
      </Container>
    </Stack>
  );
}

export default Navbar;