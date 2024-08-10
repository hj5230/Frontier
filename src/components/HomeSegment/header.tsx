import { h, FunctionComponent, VNode } from 'preact'

import { Avatar } from '@themes/avatar'
import { Box } from '@themes/box'
import { Flex } from '@themes/flex'
import { Heading } from '@themes/heading'
import { Text } from '@themes/text'

import { Typewriter } from '@components/TypeWriter'

import definition from '@assets/definition.index'

export const Header: FunctionComponent = (): VNode => {
  return (
    <Flex align="center" gap="4">
      <Avatar
        size="9"
        src={definition.avatar_uri}
        fallback="hj5230"
        radius="full"
      />
      <Box>
        <Heading size="8" mb="2">
          {definition.name}
        </Heading>
        <Text size="5" color="gray">
          <Typewriter text={definition.intro} />
        </Text>
      </Box>
    </Flex>
  )
}
