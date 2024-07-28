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
  GitHubLogoIcon,
  MoonIcon,
  SunIcon,
} from '@radix-ui/react-icons'

interface NavbarProps {
  appearance: Appearance
  changeAppearance: () => void
}

/**
 * @param _description_ TODO: avatar src should from api
 */
const Navbar: React.FC<NavbarProps> = ({
  appearance,
  changeAppearance,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Box py="4" px="4">
      <Flex justify="between" align="center">
        <Flex align="center" gap="4">
          <Link href="/">
            <Avatar
              src="https://avatars.githubusercontent.com/u/98270829?s…00&u=0a85d88786ce72fb7502b4010bbaa0d9bbdb0556&v=4"
              fallback="hj5230"
              size="4"
            />
          </Link>
          <Separator orientation="vertical" size="2" />
          <Link href="/" weight="bold" size="3">
            Home
          </Link>
          <Link href="/resume" weight="bold" size="3">
            Resume
          </Link>
          <Link href="#" weight="bold" size="3">
            Services
          </Link>
          <Link href="#" weight="bold" size="3">
            Contact
          </Link>
        </Flex>
        <Flex align="center" gap="4">
          <Link
            href="https://github.com/hj5230"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="3" variant="soft">
              <GitHubLogoIcon width="20" height="20" />
            </Button>
          </Link>
          <Button onClick={changeAppearance} size="3">
            {appearance === Appearance.DARK && (
              <MoonIcon width="20" height="20" />
            )}
            {appearance === Appearance.LIGHT && (
              <SunIcon width="20" height="20" />
            )}
          </Button>
          <DropdownMenu.Root
            open={isOpen}
            onOpenChange={setIsOpen}
          >
            <DropdownMenu.Trigger>
              <Button variant="soft" size="3">
                User Menu
                <CaretDownIcon width="20" height="20" />
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
