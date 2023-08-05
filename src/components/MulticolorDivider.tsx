'use client'

import { Stack } from "@chakra-ui/react";

const MulticolorDivider = () => {
  return (
    <Stack
      width='100%'
      direction='row'
      gap={0}
    >
      <Stack
        w='25%'
        h='5px'
        bgColor='logoRed.100'
      />
      <Stack
        w='25%'
        h='5px'
        bgColor='logoYellow.100'
      />
      <Stack
        w='25%'
        h='5px'
        bgColor='logoPurple.100'
      />
      <Stack
        w='25%'
        h='5px'
        bgColor='logoBlue.100'
      />
    </Stack>
  );
}

export default MulticolorDivider;