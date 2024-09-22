import {
  h,
  FunctionComponent,
  VNode,
  Fragment,
} from 'preact'

import { useDefinitions } from '@hooks/useDefinitions'

import { DefinitionModule } from '@typings/definition'

import { Avatar } from '@themes/avatar'
import { Box } from '@themes/box'
import { Flex } from '@themes/flex'
import { Heading } from '@themes/heading'
import { Text } from '@themes/text'
import { Skeleton } from '@themes/skeleton'

import { Typewriter } from '@components/TypeWriter'

export const Header: FunctionComponent = (): VNode => {
  const [definitions, loading, error] = useDefinitions(
    DefinitionModule.INDEX,
  )

  const layout = (content: VNode) => (
    <Flex align="center" gap="4">
      {content}
    </Flex>
  )

  if (loading) {
    return layout(
      <Fragment>
        <Skeleton>
          <Box width="72px" height="72px" />
        </Skeleton>
        <Box>
          <Skeleton>
            <Box width="200px" height="40px" mb="2" />
          </Skeleton>
          <Skeleton>
            <Box width="300px" height="24px" />
          </Skeleton>
        </Box>
      </Fragment>,
    )
  }

  if (error) {
    return layout(
      <Text>Error loading header information</Text>,
    )
  }

  const { index } = definitions

  return layout(
    <>
      <Avatar
        size="9"
        src={index.avatar_uri}
        fallback="Frontier"
        radius="full"
      />
      <Box>
        <Heading size="8" mb="2">
          {index.name}
        </Heading>
        <Text size="5" color="gray">
          <Typewriter text={index.intro} />
        </Text>
      </Box>
    </>,
  )
}
