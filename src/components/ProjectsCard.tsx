import Image from 'next/image'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Button,
} from '@chakra-ui/react'

export default function ProjectsCard() {
  return (
    <Center py={6}>
      <Box
        maxW={'380px'}
        w={'full'}
        bg={'white'}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
          <Image
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            fill
            alt="Example"
          />
        </Box>
        <Stack>
          <Text
            color={'primary.100'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Noticias
          </Text>
          <Heading
            color={'gray.800'}
            fontSize={'2xl'}
          >
            Titulo de ejemplo
          </Heading>
          <Text color={'gray.500'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua.
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Button
            variant='default'
          >
            Ver más
          </Button>
        </Stack>
      </Box>
    </Center>
  )
}