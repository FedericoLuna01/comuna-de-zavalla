'use client'

import ProjectsCard from "@/components/ProjectsCard"
import { Container, Heading, Stack } from "@chakra-ui/react"

const NewProjects = () => {
  return (
    <Stack
      id='proyectos'
      as='section'
    >
      <Container
        maxW='container.xl'
      >
        <Stack
          align='center'
          justify='center'
          my='20vh'
        >
          <Heading
            as='h1'
            variant='title'
            textDecorationColor='logoYellow.100'
            textAlign='center'
          >
            Últimos Proyectos
          </Heading>
          <Stack
            w='100%'
            gap={12}
            direction='row'
            wrap='wrap'
            justify='center'
          >
            <ProjectsCard />
            <ProjectsCard />
            <ProjectsCard />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}

export default NewProjects