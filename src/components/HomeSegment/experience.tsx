import { h, FunctionComponent, VNode } from 'preact'

import { useDefinitions } from '@hooks/useDefinitions'

import { DefinitionModule } from '@typings/definition'

import { Link } from '@themes/link'
import { Heading } from '@themes/heading'
import { Flex } from '@themes/flex'
import { Text } from '@themes/text'
import { Blockquote } from '@themes/blockquote'
import { Box } from '@themes/box'
import { Skeleton } from '@themes/skeleton'

import { KeyboardIcon } from '@radix-ui/react-icons'

import { GlowPanel } from '@components/GlowPanel'
import { Typewriter } from '@components/TypeWriter'

export const Experience: FunctionComponent = (): VNode => {
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
        <Skeleton>
          <Box width="200px" height="40px" />
        </Skeleton>
        {[1, 2, 3].map((_, index) => (
          <Flex key={index} direction="column" gap="2">
            <Skeleton>
              <Box width="100%" height="30px" />
            </Skeleton>
            <Skeleton>
              <Box width="80%" height="20px" />
            </Skeleton>
            <Skeleton>
              <Box width="90%" height="60px" />
            </Skeleton>
          </Flex>
        ))}
      </Flex>,
    )
  }

  if (error) {
    return layout(<div>Error loading definitions</div>)
  }

  const { app, index } = definitions

  return layout(
    <Box>
      <Link href={app.path[3].path}>
        <Heading size="6" mb="4">
          <Flex align="center" gap="2">
            <KeyboardIcon width="24" height="24" />
            {index._experience}
          </Flex>
        </Heading>
      </Link>
      <Flex direction="column" gap="4">
        {index.experience.map(e => (
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
                <Blockquote key={i}>
                  <Typewriter text={d} />
                </Blockquote>
              ))}
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>,
  )
}
