import { Stack, Text, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

interface PlacesCardProps {
  direction?: 'row' | 'row-reverse'
}

const PlacesCard = ({ direction = 'row' }: PlacesCardProps) => {

  return (
    <Stack
      direction={{ base: 'column', lg: direction }}
      gap={16}
      align='center'
    >
      <Stack
        w={{ base: '100%', md: '50%', lg: '100%' }}
        align='center'
        justify='center'
      >
        <Image
          src='/parque-villarino.jpg'
          alt='Parque villarino'
          width={1000}
          height={700}
          className='image'
        />
      </Stack>
      <Stack
        gap={5}
      >
        <Stack
          gap={1}
        >
          <Heading>
            Parque Villarino
          </Heading>
          <Stack
            direction='row'
            align='center'
          >
            <FaMapMarkerAlt
              size={20}
              color='#4a5568'
            />
            <Text
              color='gray.600'
            >
                  Zavalla, Santa Fe
            </Text>
          </Stack>
        </Stack>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, dignissimos! Fugiat deserunt hic voluptatum veritatis quia culpa in aut ad! Hic reprehenderit dolores velit exercitationem commodi fuga molestias inventore fugit distinctio rerum architecto modi omnis voluptatibus aut quibusdam, quidem ullam quia minus asperiores facilis similique ipsa minima ea. Eius, minus.
        </Text>
      </Stack>
    </Stack>
  );
}

export default PlacesCard;