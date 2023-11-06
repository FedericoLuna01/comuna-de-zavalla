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
      maxW={'390px'}
      w={'full'}
      h='full'
      bg={'white'}
      boxShadow={'2xl'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}
      as='article'
    >
      <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
        <Image
          src={img}
          fill
          alt={title}
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
      </Box>
      <Stack>
        <Text
          color={'primary.400'}
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
          as='h3'
        >
          {title}
        </Heading>
        <Text color={'gray.500'}>
          {description}
        </Text>
      </Stack>
    </Box>
  )
}