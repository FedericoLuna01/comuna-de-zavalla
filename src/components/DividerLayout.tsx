import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

interface DividerLayoutProps {
  children: React.ReactNode;
  title: string
  subtitle: string
  direction?: 'row' | 'row-reverse'
  image: string
  alt: string
  size?: number
}

const DividerLayout = ({ children, title, subtitle, direction = 'row', image, alt, size = 300 }: DividerLayoutProps) => {
  return (
    <Container
      maxW='container.xl'
      w='100%'
    >
      <Stack
        bg='primary.100'
        borderRadius='.60rem'
        direction={{ base: direction === 'row' ? 'column' : 'column-reverse', lg: direction }}
        align='center'
        justify='space-between'
        px={10}
        py={4}
        gap={10}
      >
        <Stack
          align={{ base: 'center', md: 'flex-start' }}
        >
          <Stack
            textAlign={{ base: 'center', md: 'left' }}
          >
            <Heading
              as='h4'
            >
              {title}
            </Heading>
            <Text
              fontSize={{ base: '1.3rem', md: '1.7rem' }}
              fontWeight='semibold'
              color='secondary.100'
            >
              {subtitle}
            </Text>
          </Stack>
          {children}
        </Stack>
        <Image
          src={image}
          alt={alt}
          width={size}
          height={size}
          style={{
            borderRadius: '.60rem'
          }}
        />
      </Stack>
    </Container>
  );
}

export default DividerLayout;