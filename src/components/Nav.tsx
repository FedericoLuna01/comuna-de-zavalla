import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Show, Stack, useDisclosure } from "@chakra-ui/react";
import Menu from "./Menu";
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
          backgroundColor= 'primary.100'
          size='md'
          borderRadius='md'
          _hover= {{ brightness: '80%' }}
          onClick={onOpen}
        >
          <GiHamburgerMenu color='black' size={15} />
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