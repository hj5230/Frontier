import { h, FunctionComponent, VNode } from 'preact'

import {
  Blockquote,
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
import definition from '@assets/definition.index'

const Project: FunctionComponent = (): VNode => {
  return (
    <GlowPanel>
      <Link
        href={navbar_definition.navigator_items[2].path}
      >
        <Heading size="6" mb="4">
          <Flex align="center" gap="2">
            <CubeIcon width="24" height="24" />
            {definition._project}
          </Flex>
        </Heading>
      </Link>
      <Flex direction="column" gap="4">
        {definition.project.map(p => (
          <Box key={p.title}>
            <Flex direction="column" gap="1">
              <Text as="p" weight="bold">
                {p.title}
              </Text>
              {p.description.map((d, i) => (
                <Blockquote>
                  <Typewriter key={i} text={d} />
                </Blockquote>
              ))}
              <Link href={p.link}>
                <Text>{p.link}</Text>
              </Link>
            </Flex>
          </Box>
        ))}
      </Flex>
    </GlowPanel>
  )
}

export default Project
