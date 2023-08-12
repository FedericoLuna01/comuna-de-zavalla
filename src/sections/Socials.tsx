'use client'

import DividerLayout from "@/components/DividerLayout"
import { Stack, Text } from "@chakra-ui/react"
import Image from "next/image"

interface SocialButtonProps {
  href: string
  image: string
  label: string
  alt: string
}

const SocialButton = ({ href, image, label, alt }: SocialButtonProps) => {
  return (
    <Stack
      direction='row'
      align='center'
      as='a'
      href={href}
      target='_blank'
      py={3}
      px={6}
      bg='#edf2f7'
      borderRadius='.7rem'
      transition={'.2s ease-in-out'}
      _hover={{
        filter: 'brightness(1.05)',
        boxShadow: '4px 4px 0 rgba(0,0,0,0.25)'
      }}
      _active={{
        filter: 'brightness(0.95)',
        boxShadow: 'none'
      }}
      textAlign={'center'}
    >
      <Image
        src={image}
        alt={alt}
        width={30}
        height={30}
      />
      <Text
        fontWeight='bold'
        fontSize='1.2rem'
      >
        {label}
      </Text>
    </Stack>
  )
}

const Socials = () => {
  return (
    <DividerLayout
      title='Nuestras redes sociales'
      subtitle="Seguinos en nuestras redes sociales para estar al tanto de las ultimas novedades del pueblo."
      direction="row-reverse"
      image='/Following-amico-1.svg'
      alt='Following Illustration'
    >
      <Stack
        direction='row'
        wrap='wrap'
        pt={3}
        justify='center'
      >
        <SocialButton
          href='https://www.instagram.com/comunazavalla/'
          image='/instagram.svg'
          label='@ComunaDeZavalla'
          alt='Instagram Logo'
        />
        <SocialButton
          href='https://www.facebook.com/ComunaDeZavalla'
          image='/facebook.svg'
          label='Comuna de Zavalla'
          alt='Facebook Logo'
        />
      </Stack>
    </DividerLayout>
  )
}

export default Socials