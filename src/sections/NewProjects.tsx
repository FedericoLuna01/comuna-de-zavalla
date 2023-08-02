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
          minH='100vh'
          align='center'
          justify='center'
        >
          <Heading
            as='h1'
            variant='title'
          >
            Últimos Proyectos
          </Heading>
          <Stack
            direction='row'
            gap={10}
            wrap='wrap'
            justify='space-between'
            w='100%'
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