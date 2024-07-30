import { h, FunctionComponent, VNode } from 'preact'

import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
} from '@radix-ui/themes'
import { CubeIcon } from '@radix-ui/react-icons'

import GlowPanel from '@components/GlowPanel'
import Typewriter from '@components/TypeWriter'

import navbar_definition from '@assets/definition.navbar'
import home_definition from '@assets/definition.home'

const Project: FunctionComponent = (): VNode => {
  return (
    <GlowPanel>
      <Link
        href={navbar_definition.navigator_items[2].path}
      >
        <Heading size="6" mb="4">
          <Flex align="center" gap="2">
            <CubeIcon width="24" height="24" />
            {home_definition._project}
          </Flex>
        </Heading>
      </Link>
      <Flex direction="column" gap="4">
        {home_definition.project.map(p => (
          <Box key={p.title}>
            <Text as="p" weight="bold">
              {p.title}
            </Text>
            <Typewriter text={p.description} soft />
            <Link href={p.link}>
              <Text>{p.link}</Text>
            </Link>
          </Box>
        ))}
      </Flex>
    </GlowPanel>
  )
}

export default Project
