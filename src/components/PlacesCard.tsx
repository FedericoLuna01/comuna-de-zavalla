import { Stack, Text, Heading } from "@chakra-ui/react";
import Image from "next/image";

interface PlacesCardProps {
  direction?: 'row' | 'row-reverse'
}

const PlacesCard = ({ direction = 'row' }: PlacesCardProps) => {
  return (
    <Stack
      direction={direction}
      gap={16}
      pos='relative'
    >
      <Stack>
        <Image
          src='/parque-villarino.jpg'
          alt='Parque villarino'
          width={1000}
          height={700}
          style={{
            borderRadius: '10px',
            boxShadow: `5px 5px 0 #C4D42D`,
          }}
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
            <Image
              src='/icons/map-marker-4.svg'
              alt='Map marker'
              width={20}
              height={20}
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