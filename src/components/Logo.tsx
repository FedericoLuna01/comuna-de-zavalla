import { Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";
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
        <Image
          src='/logo.png'
          alt='Logo comuna de zavalla'
          width={40}
          height={40}
        />
        <Heading
          fontSize='lg'
          maxW='100px'
          textAlign='center'
          as='h1'
        >
          Comuna de Zavalla
        </Heading>
      </Stack>
    </Link>
  );
}

export default Logo;