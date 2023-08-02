import { Heading, Stack } from "@chakra-ui/react";

const Logo = () => {
  return (
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
  );
}

export default Logo;