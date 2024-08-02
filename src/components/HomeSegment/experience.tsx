import { h, FunctionComponent, VNode } from 'preact'

import {
  Blockquote,
  Box,
  Flex,
  Heading,
  Link,
  Text,
} from '@radix-ui/themes'
import { KeyboardIcon } from '@radix-ui/react-icons'

import GlowPanel from '@components/GlowPanel'
import Typewriter from '@components/TypeWriter'

import navbar_definition from '@assets/definition.navbar'
import definition from '@assets/definition.index'

const Experience: FunctionComponent = (): VNode => {
  return (
    <GlowPanel>
      <Link
        href={navbar_definition.navigator_items[1].path}
      >
        <Heading size="6" mb="4">
          <Flex align="center" gap="2">
            <KeyboardIcon width="24" height="24" />
            {definition._experience}
          </Flex>
        </Heading>
      </Link>
      <Flex direction="column" gap="4">
        {definition.experience.map(e => (
          <Box key={e.title}>
            <Flex direction="column" gap="1">
              <Flex justify="between" align="center">
                <Text as="p" weight="bold">
                  {e.title}
                </Text>
                <Text as="p" color="gray" size="2">
                  {e.period}
                </Text>
              </Flex>
              {e.description.map((d, i) => (
                <Blockquote>
                  <Typewriter key={i} text={d} />
                </Blockquote>
              ))}
            </Flex>
          </Box>
        ))}
      </Flex>
    </GlowPanel>
  )
}

export default Experience
