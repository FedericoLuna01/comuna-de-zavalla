'use client'

import { Container, Stack, Box, SimpleGrid, Flex, Text, Link } from "@chakra-ui/react"
import Logo from "./Logo"
import { INFO_ITEMS, MENU_ITEMS, SOCIALS_ITEMS } from "@/data/data"

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
      as='footer'
    >
      <Container
        maxW="container.xl"
      >
        <Stack
          minH='15vh'
          my={10}
        >
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>Contacto</ListHeader>
              {
                INFO_ITEMS.map((item) => (
                  <Link
                    key={item.id}
                    variant='footer'
                    as="a"
                    target='_blank'
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                ))
              }
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Navegación</ListHeader>
              {
                MENU_ITEMS.map((item) => (
                  <Link
                    key={item.id}
                    variant='footer'
                    as="a"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                ))
              }
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Redes</ListHeader>
              {
                SOCIALS_ITEMS.map((item) => (
                  <Link
                    key={item.id}
                    variant='footer'
                    as="a"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                ))
              }
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
          © 2023 Todos los derechos reservados. Comuna de Zavalla | Diseño y desarrollo{' '}
          <Link href='https://cuppypaginasweb.com' target="_blank">Cuppy páginas web</Link>
        </Text>

      </Box>
    </Stack>
  )
}

export default Footer
