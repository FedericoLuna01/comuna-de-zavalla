'use client'

import { Container, Stack, Box, SimpleGrid, Flex, Text, Link } from "@chakra-ui/react"
import Logo from "./Logo"

const ListHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

const Footer = () => {
  return (
    <Stack
      bg='bg.100'
    >
      <Container
        maxW="container.xl"
      >
        <Stack
          minH='15vh'
          my={10}
        >
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>Contacto</ListHeader>
              <Link variant='footer' as="a" href={'#'}>
              About Us
              </Link>
              <Link variant='footer' as="a" href={'#'}>
              Press
              </Link>
              <Link variant='footer' as="a" href={'#'}>
              Careers
              </Link>
              <Link variant='footer' as="a" href={'#'}>
              Contact Us
              </Link>
              <Link variant='footer' as="a" href={'#'}>
              Partners
              </Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Navegación</ListHeader>
              <Link variant='footer' as="a" href={'#'}>
              About Us
              </Link>
              <Link variant='footer' as="a" href={'#'}>
              Press
              </Link>
              <Link variant='footer' as="a" href={'#'}>
              Careers
              </Link>
              <Link variant='footer' as="a" href={'#'}>
              Contact Us
              </Link>
              <Link variant='footer' as="a" href={'#'}>
              Partners
              </Link>
            </Stack>
          </SimpleGrid>
        </Stack>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: 'gray.700',
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: 'gray.700',
            flexGrow: 1,
            ml: 8,
          }}>
          <Logo />
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2023 Todos los derechos reservados. Comuna de Zavalla | Desarrollado por{' '}
          <Link>Cuppy páginas web</Link>
        </Text>

      </Box>
    </Stack>
  )
}

export default Footer
