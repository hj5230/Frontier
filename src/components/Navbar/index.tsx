import { h, FunctionComponent, VNode } from 'preact'
import { useEffect, useState, useRef } from 'preact/hooks'

import { useLocation } from '@hooks/index'

import { Avatar } from '@themes/avatar'
import { Box } from '@themes/box'
import { Flex } from '@themes/flex'
import { Link } from '@themes/link'
import { Separator } from '@themes/separator'
import { Root, Slot } from '@themes/text-field'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

import app_definition from '@assets/definition.app'
import navbar_definition from '@assets/definition.navbar'

export const Navbar: FunctionComponent = (): VNode => {
  // const [isOpen, setIsOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const currentPath = useLocation()
  const searchInputRef = useRef<HTMLInputElement>(null)

  function handleSearchValueChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    setSearchValue(event.currentTarget.value)
  }

  function handleSearchFocus() {
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }

  function handleKeyPress(
    event: React.KeyboardEvent<HTMLInputElement>,
  ) {
    if (event.key === 'Enter') {
      console.log('Searching for:', searchValue)
      // @ts-expect-error - most browsers do have method find()
      window.find(searchValue)
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key === 'f'
      ) {
        event.preventDefault()
        handleSearchFocus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <Box py="1" px="1">
      <Flex justify="between" align="center">
        <Flex align="center" gap="4">
          <Link href="/">
            <Avatar
              src={navbar_definition.site_icon_uri}
              fallback="SZ"
              size="4"
            />
          </Link>
          <Separator orientation="vertical" size="2" />
          {app_definition.path.map(n => (
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
            >
              {n.name}
            </Link>
          ))}
        </Flex>
        <Flex align="center" gap="4">
          <Root
            ref={searchInputRef}
            placeholder="⌘ + F"
            radius="full"
            size="3"
            value={searchValue}
            onChange={handleSearchValueChange}
            onKeyPress={handleKeyPress}
            onFocus={handleSearchFocus}
          >
            <Slot>
              <MagnifyingGlassIcon height="24" width="24" />
            </Slot>
          </Root>
          {/* <DropdownMenu.Root
            open={isOpen}
            onOpenChange={setIsOpen}
          >
            <DropdownMenu.Trigger>
              <Button variant="soft" size="3">
                <GlobeIcon height="24" width="24" />
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
          </DropdownMenu.Root> */}
        </Flex>
      </Flex>
    </Box>
  )
}
