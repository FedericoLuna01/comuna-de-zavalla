'use client'

import DividerLayout from "@/components/DividerLayout";
import { Button } from "@chakra-ui/react"
import { RiWhatsappFill } from 'react-icons/ri';

const Whatsapp = () => {
  return (
    <DividerLayout
      title='#ZavallaAlDia'
      subtitle='Mandanos un mensaje a nuestro Whatsapp para recibir las actividades de la Comuna.'
      image="/zavalla-al-dia.svg"
      alt="Whatsapp Illustration"
      size={280}
    >
      <Button
        colorScheme='gray'
        leftIcon={<RiWhatsappFill size='30px' color='#25D366' />}
        width='fit-content'
        size='lg'
        as='a'
        href='https://wa.me/3415416732?text=HOLA'
        target='_blank'
      >
        Escribinos ahora!
      </Button>
    </DividerLayout>
  )
}

export default Whatsapp