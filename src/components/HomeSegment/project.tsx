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

import home_definition from '@assets/definition.home'

const Project: FunctionComponent = (): VNode => {
  return (
    <GlowPanel>
      <Heading size="6" mb="4">
        <Flex align="center" gap="2">
          <CubeIcon width="24" height="24" />
          {home_definition._project}
        </Flex>
      </Heading>
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
