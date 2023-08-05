'use client'

import DividerLayout from "@/components/DividerLayout";
import { Button } from "@chakra-ui/react"
import { RiWhatsappFill } from 'react-icons/ri';

const Whatsapp = () => {
  return (
    <DividerLayout
      title='#ZavallaAlDia'
      subtitle='Escribinos en Whatsapp para estar al tanto de las ultimas novedades del pueblo.'
      image="/zavalla-al-dia.svg"
      alt="Whatsapp Illustration"
      size={280}
    >
      <Button
        colorScheme='gray'
        leftIcon={<RiWhatsappFill size='30px' color='#25D366' />}
        width='fit-content'
        size='lg'
      >
        Escribinos ahora!
      </Button>
    </DividerLayout>
  )
}

export default Whatsapp