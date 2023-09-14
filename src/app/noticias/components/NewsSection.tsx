'use client'

import { Button, Container, Divider, Heading, Stack, Text } from "@chakra-ui/react"
import { AiOutlineSearch } from 'react-icons/ai'
import { useSearchParams } from 'next/navigation'
import Link from "next/link"

import NewsGrid from "@/components/NewsGrid"
import { NEWS_ITEMS } from "@/data/data"

const NewsSection = () => {
  const categories: string[] = ['Todas', ...new Set(NEWS_ITEMS.map(item => item.category))]
  // const categories: string[] = Array.from(new Set(NEWS_ITEMS.map(item => item.category))).unshift('Todas')

  const searchParams = useSearchParams()
  const category = searchParams.get('categoria')

  const getNews = () => {
    if (!category || category === 'Todas') {
      return NEWS_ITEMS
    }
    return NEWS_ITEMS.filter(item => item.category === category)
  }

  const news = getNews()

  return (
    <Stack
      as='section'
      pb={32}
    >
      <Container
        maxW='container.xl'
      >
        <Stack>
          <Stack
            direction={{ base: 'column', md:'row' }}
            justify='space-between'
            align={{ base: 'flex-start', md:'center' }}
          >
            <Heading
              as='h2'
              fontSize={{ base: '3xl', md: '4xl' }}
            >
              Últimas noticias
            </Heading>
            <Stack
              direction='row'
              spacing={4}
            >
              {
                categories.map((category, i) => (
                  <Button
                    key={i}
                    colorScheme='primary'
                    size='sm'
                    variant='outline'
                    as={Link}
                    href={`/noticias?categoria=${category}`}
                  >
                    {category}
                  </Button>
                ))
              }
            </Stack>
          </Stack>
          <Divider mb={5} orientation='horizontal' />
          {
            news.length === 0
              ?
              <Stack
                direction='row'
                align='center'
              >
                <AiOutlineSearch size={30} />
                <Text
                  fontSize={{ base: 'xl', md: '2xl' }}
                >
                  No hay noticias en esta categoría
                </Text>
              </Stack>
              :
              <NewsGrid
                news={news}
              />
          }
        </Stack>
      </Container>
    </Stack>
  )
}

export default NewsSection