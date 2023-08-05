'use client'

import { MENU_ITEMS } from "@/data/data";
import { Stack, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

interface MenuProps {
  direction: 'row' | 'column'
  gap: number
  align?: 'flex-start' | 'center' | 'flex-end'
  onClick?: () => void
}

export const Menu: React.FC<MenuProps> = ({ direction, gap, align, onClick = () => {} }) => {
  return (
    <nav>
      <Stack
        as='ul'
        direction={direction}
        justify='center'
        gap={gap}
        align={align}
        listStyleType={'none'}
      >
        {
          MENU_ITEMS.map(({ id, href, label }) => (
            <ChakraLink
              as={'li'}
              key={id}
              onClick={onClick}
            >
              <Link href={href}>{label}</Link>
            </ChakraLink>
          ))
        }
      </Stack>
    </nav>
  )
}

export default Menu;