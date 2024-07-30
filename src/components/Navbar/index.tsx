import { h, FunctionComponent, VNode } from 'preact'
import { useState } from 'preact/hooks'

import {
  Avatar,
  Box,
  Flex,
  Separator,
  Link,
  Button,
  DropdownMenu,
  TextField,
} from '@radix-ui/themes'
import {
  CaretDownIcon,
  GlobeIcon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons'

import definition from '@assets/definition'

/**
 * @param _description_ TODO: avatar src should from api
 */
const Navbar: FunctionComponent = (): VNode => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Box py="1" px="1">
      <Flex justify="between" align="center">
        <Flex align="center" gap="4">
          <Link href="/">
            <Avatar
              src={definition.site_icon_uri}
              fallback="SZ"
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
          <Link href="/projects" weight="bold" size="3">
            Project
          </Link>
          <Link href="/contact" weight="bold" size="3">
            Contact
          </Link>
        </Flex>
        <Flex align="center" gap="4">
          <TextField.Root
            placeholder="Search the docs…"
            radius="full"
            size="3"
          >
            <TextField.Slot>
              <MagnifyingGlassIcon height="24" width="24" />
            </TextField.Slot>
          </TextField.Root>
          <DropdownMenu.Root
            open={isOpen}
            onOpenChange={setIsOpen}
          >
            <DropdownMenu.Trigger>
              <Button variant="soft" size="3">
                <GlobeIcon height="24" width="24" />
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
