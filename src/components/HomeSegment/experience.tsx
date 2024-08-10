import { h, FunctionComponent, VNode } from 'preact'

import { Link } from '@themes/link'
import { Heading } from '@themes/heading'
import { Flex } from '@themes/flex'
import { Text } from '@themes/text'
import { Blockquote } from '@themes/blockquote'
import { Box } from '@themes/box'
import { KeyboardIcon } from '@radix-ui/react-icons'

import { GlowPanel } from '@components/GlowPanel'
import { Typewriter } from '@components/TypeWriter'

import app_definition from '@assets/definition.app'
import definition from '@assets/definition.index'

export const Experience: FunctionComponent = (): VNode => {
  return (
    <GlowPanel>
      <Link href={app_definition.path[3].path}>
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
                <Text as="p" weight="bold" truncate>
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
