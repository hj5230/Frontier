import { h, FunctionComponent, VNode } from 'preact'

import {
  Badge,
  Em,
  Flex,
  Heading,
  Link,
  Text,
} from '@radix-ui/themes'

import { PersonIcon } from '@radix-ui/react-icons'

import GlowPanel from '@components/GlowPanel'
import Typewriter from '@components/TypeWriter'

import app_definition from '@assets/definition.app'
import definition from '@assets/definition.index'

const Intro: FunctionComponent = (): VNode => {
  return (
    <GlowPanel>
      <Flex justify="between" align="center" mb="4">
        <Link href={app_definition.path[1].path}>
          <Heading size="6">
            <Flex align="center" gap="2">
              <PersonIcon width="24" height="24" />
              {definition._about_me}
            </Flex>
          </Heading>
        </Link>
        <Flex gap="2" justify="end">
          {definition.badges.map(b => (
            <Badge key={b.text} color={b.color}>
              {b.text}
            </Badge>
          ))}
        </Flex>
      </Flex>
      <Typewriter text={definition.about_me} />
      <Flex gap="2" mt="3">
        <Text>{definition._github}</Text>
        <Link href={definition.github}>
          <Em>{definition.github}</Em>
        </Link>
      </Flex>
    </GlowPanel>
  )
}

export default Intro
