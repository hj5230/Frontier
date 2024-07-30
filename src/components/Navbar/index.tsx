import { h, FunctionComponent, VNode } from 'preact'
import { useState, useEffect } from 'preact/hooks'

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

import navbar_definition from '@assets/definition.navbar'

/**
 * @param _description_ TODO: avatar src should from api
 */
const Navbar: FunctionComponent = (): VNode => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname,
  )

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener(
      'popstate',
      handleLocationChange,
    )
    return () => {
      window.removeEventListener(
        'popstate',
        handleLocationChange,
      )
    }
  }, [])

  const handleLinkClick = (path: string) => {
    setCurrentPath(path)
  }

  return (
    <Box py="1" px="1">
      <Flex justify="between" align="center">
        <Flex align="center" gap="4">
          <Link
            href="/"
            onClick={() => handleLinkClick('/')}
          >
            <Avatar
              src={navbar_definition.site_icon_uri}
              fallback="SZ"
              size="4"
            />
          </Link>
          <Separator orientation="vertical" size="2" />
          {navbar_definition.navigator_items.map(n => (
            <Link
              key={n.path}
              href={n.path}
              weight="bold"
              size="4"
              style={{ margin: '10px' }}
              underline={
                currentPath === n.path ? 'always' : 'hover'
              }
              highContrast={currentPath !== n.path}
              onClick={() => handleLinkClick(n.path)}
            >
              {n.name}
            </Link>
          ))}
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
