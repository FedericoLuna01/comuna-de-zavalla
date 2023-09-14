import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Show, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

import Menu from "./Menu";
import Logo from "./Logo";

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = () => {
    isOpen ? onClose() : onOpen()
  }

  return (
    <>
      <Show
        above='md'
      >
        <Menu
          direction='row'
          align='flex-start'
          gap={5}
        />
      </Show>
      <Show
        below='md'
      >
        <Button
          size='md'
          borderRadius='md'
          colorScheme="primary"
          onClick={handleClick}
        >
          <GiHamburgerMenu color='black' size={15} />
          <Text display='none'>Menu</Text>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='top'
          onClose={onClose}
          trapFocus={false}
        >
          <DrawerOverlay />
          <DrawerContent
            backgroundColor='bg.200'
          >
            <DrawerCloseButton color='black' size='lg' />
            <Stack
              align='center'
              pb={8}
            >
              <DrawerHeader>
                <Logo />
              </DrawerHeader>
              <DrawerBody>
                <Menu
                  direction='column'
                  align='center'
                  gap={3}
                  onClick={onClose}
                />
              </DrawerBody>
            </Stack>
          </DrawerContent>
        </Drawer>
      </Show>
    </>
  );
}

export default Nav;