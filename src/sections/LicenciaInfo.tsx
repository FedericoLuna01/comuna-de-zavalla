import { LICENCIA_ITEMS } from "@/data/data"
import { Container, Heading, Stack, Text } from "@chakra-ui/react"

const LicenciaInfo = () => {
  return (
    <Stack
      as='section'
    >
      <Container
        maxW='container.xl'
      >
        <Stack
          align='center'
          justify='space-between'
          pb='20vh'
        >
          <Heading
            as='h1'
            variant='title'
            textDecorationColor='logoPurple.100'
            textAlign='center'
            mb={10}
            maxW='550px'
          >
            Toda la información que necesitás
          </Heading>
          <Stack
            gap={6}
            maxW={{ base:'100%', md: '40%' }}
          >
            {
              LICENCIA_ITEMS.map(({ id, content, title }) =>
                <Stack
                  key={id}
                >
                  <Stack
                    direction='row'
                    align='center'
                  >
                    <Stack
                      align='center'
                      justify='center'
                      bg='primary.100'
                      color='white'
                      rounded='50%'
                      w={10}
                      h={10}
                    >
                      <Text
                        fontSize='1.5rem'
                        fontWeight='bold'
                      >
                        {id}
                      </Text>
                    </Stack>
                    <Text
                      fontSize='1.3rem'
                      fontWeight='semibold'
                    >
                      {title}
                    </Text>
                  </Stack>
                  <Text
                    ml={12}
                  >
                    {content}
                  </Text>
                </Stack>
              )
            }

          </Stack>
        </Stack>
      </Container>
    </Stack>

  )
}

export default LicenciaInfo