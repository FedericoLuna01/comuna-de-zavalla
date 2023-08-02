'use client'

import { Container, Stack, Link } from "@chakra-ui/react";
import Logo from "./Logo";
import { MENU_ITEMS } from "@/data/data";

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
      zIndex='999999'
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
          <Stack
            as='nav'
            direction='row'
            gap={8}
          >
            {
              MENU_ITEMS.map(({ href, id, label }) => (
                <Link
                  key={id}
                  href={href}
                >
                  {label}
                </Link>
              ))
            }
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}

export default Navbar;