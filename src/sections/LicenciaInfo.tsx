import LicenciaAccordion from "@/app/licencia-de-conducir/components/Accordion"
import { Container, Heading, Stack } from "@chakra-ui/react"

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
            as='h2'
            variant='title'
            textDecorationColor='logoPurple.100'
            textAlign='center'
            mb={10}
            maxW='550px'
          >
            Toda la información que necesitás
          </Heading>
          <Stack
            pos='relative'
            w={{ base: '', lg: '40vw' }}
          >
            <LicenciaAccordion />
          </Stack>
        </Stack>
      </Container>
    </Stack>

  )
}

export default LicenciaInfo