import { h, FunctionComponent, VNode } from 'preact'

import { Badge, Flex, Heading } from '@radix-ui/themes'

import { PersonIcon } from '@radix-ui/react-icons'

import GlowPanel from '@components/GlowPanel'
import Typewriter from '@components/TypeWriter'

import definition from '@assets/definition.index'

const Intro: FunctionComponent = (): VNode => {
  return (
    <GlowPanel>
      <Flex justify="between" align="center" mb="4">
        <Heading size="6">
          <Flex align="center" gap="2">
            <PersonIcon width="24" height="24" />
            {definition._about_me}
          </Flex>
        </Heading>
        <Flex wrap="wrap" gap="2" justify="end">
          {definition.badges.map(b => (
            <Badge key={b.text} color={b.color}>
              {b.text}
            </Badge>
          ))}
        </Flex>
      </Flex>
      <Typewriter text={definition.about_me} />
    </GlowPanel>
  )
}

export default Intro
