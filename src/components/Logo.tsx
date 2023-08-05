'use client'

import { Heading, Stack } from "@chakra-ui/react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href='/'
    >
      <Stack
        direction='row'
        align='center'
      >
        <Stack
          w='40px'
          h='40px'
          bg='black'
          borderRadius='10px'
        />
        <Heading
          fontSize='lg'
          maxW='100px'
          textAlign='center'
        >
          Comuna de Zavalla
        </Heading>
      </Stack>
    </Link>
  );
}

export default Logo;