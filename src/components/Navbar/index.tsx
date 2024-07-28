import { h } from 'preact'
import { useState } from 'preact/hooks'

import { Appearance } from '@interfaces/appearance'

import {
  Avatar,
  Box,
  Flex,
  Separator,
  Link,
  Button,
  DropdownMenu,
} from '@radix-ui/themes'
import {
  CaretDownIcon,
  SunIcon,
} from '@radix-ui/react-icons'

interface NavbarProps {
  apparance: Appearance
  changeAppearance: () => void
}

// To Do: avatar src should from api
const Navbar = ({ changeAppearance }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Box py="2" px="4">
      <Flex justify="between" align="center">
        <Flex align="center" gap="4">
          <Avatar
            src="	https://avatars.githubusercontent.com/u/98270829?s…00&u=0a85d88786ce72fb7502b4010bbaa0d9bbdb0556&v=4"
            fallback="A"
          />
          <Separator orientation="vertical" />
          <Link href="/" weight="bold">
            Home
          </Link>
          <Link href="#" weight="bold">
            About
          </Link>
          <Link href="#" weight="bold">
            Services
          </Link>
          <Link href="#" weight="bold">
            Contact
          </Link>
        </Flex>
        <Flex align="center" gap="4">
          <Button onClick={changeAppearance}>
            <SunIcon />
          </Button>
          <DropdownMenu.Root
            open={isOpen}
            onOpenChange={setIsOpen}
          >
            <DropdownMenu.Trigger>
              <Button variant="soft">
                User Menu
                <CaretDownIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>Profile</DropdownMenu.Item>
              <DropdownMenu.Item>
                Settings
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item color="red">
                Logout
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
