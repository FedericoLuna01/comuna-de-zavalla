import Image from 'next/image'
import {
  Box,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react'

interface ProjectsCardProps {
  title: string
  category: string
  description: string
  img: string
}

export default function ProjectsCard({ title,
  category,
  description,
  img
}: ProjectsCardProps) {
  return (
    <Box
      maxW={'380px'}
      w={'full'}
      bg={'white'}
      boxShadow={'2xl'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}
    >
      <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
        <Image
          src={img}
          fill
          alt={title}
        />
      </Box>
      <Stack>
        <Text
          color={'primary.100'}
          textTransform={'uppercase'}
          fontWeight={800}
          fontSize={'sm'}
          letterSpacing={1.1}
        >
          {category}
        </Text>
        <Heading
          color={'gray.800'}
          fontSize={'2xl'}
        >
          {title}
        </Heading>
        <Text color={'gray.500'}>
          {description}
        </Text>
      </Stack>
      {/* <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Button
            variant='default'
          >
            Ver más
          </Button>
        </Stack> */}
    </Box>
  )
}