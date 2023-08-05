'use client'

import DividerLayout from "@/components/DividerLayout"
import { Button } from "@chakra-ui/react"
import Link from "next/link"

const Carnet = () => {
  return (
    <DividerLayout
      title='Licencia de conducir'
      subtitle="Toda la información que necesitas para obtener tu licencia de conducir en el pueblo."
      direction="row-reverse"
      alt="Carnet de conducir Illustration"
      image='/carnet-de-conducir.svg'
      size={350}
    >
      <Button
        as={Link}
        href='/licencia-de-conducir'
      >
        Mas info
      </Button>
    </DividerLayout>
  )
}

export default Carnet