import {
  h,
  FunctionComponent,
  VNode,
  Fragment,
} from 'preact'

import { useDefinitions } from '@hooks/useDefinitions'

import { DefinitionModule } from '@typings/definition'

import { Badge } from '@themes/badge'
import { Em } from '@themes/em'
import { Flex } from '@themes/flex'
import { Heading } from '@themes/heading'
import { Link } from '@themes/link'
import { Text } from '@themes/text'
import { Skeleton } from '@themes/skeleton'
import { Box } from '@themes/box'

import { PersonIcon } from '@radix-ui/react-icons'

import { GlowPanel } from '@components/GlowPanel'
import { Typewriter } from '@components/TypeWriter'

export const Intro: FunctionComponent = (): VNode => {
  const [definitions, loading, error] = useDefinitions(
    DefinitionModule.APP,
    DefinitionModule.INDEX,
  )

  const layout = (content: VNode) => (
    <GlowPanel>{content}</GlowPanel>
  )

  if (loading) {
    return layout(
      <Flex direction="column" gap="4">
        <Flex justify="between" align="center">
          <Skeleton>
            <Box width="200px" height="30px" />
          </Skeleton>
          <Flex gap="2">
            {[1, 2, 3].map((_, index) => (
              <Skeleton key={index}>
                <Box width="60px" height="24px" />
              </Skeleton>
            ))}
          </Flex>
        </Flex>
        <Skeleton>
          <Box width="100%" height="100px" />
        </Skeleton>
        <Skeleton>
          <Box width="200px" height="24px" />
        </Skeleton>
      </Flex>,
    )
  }

  if (error) {
    return layout(
      <Text>Error loading intro information</Text>,
    )
  }

  const { app, index } = definitions

  return layout(
    <Fragment>
      <Flex justify="between" align="center" mb="4">
        <Link href={app.path[1].path}>
          <Heading size="6">
            <Flex align="center" gap="2">
              <PersonIcon width="24" height="24" />
              {index._about_me}
            </Flex>
          </Heading>
        </Link>
        <Flex gap="2" justify="end">
          {index.badges.map(b => (
            <Badge key={b.text} color={b.color}>
              {b.text}
            </Badge>
          ))}
        </Flex>
      </Flex>
      <Typewriter text={index.about_me} />
      <Flex gap="2" mt="3">
        <Text>{index._github}</Text>
        <Link href={index.github}>
          <Em>{index.github}</Em>
        </Link>
      </Flex>
    </Fragment>,
  )
}
