import {
  h,
  FunctionComponent,
  VNode,
  Fragment,
} from 'preact'

import { useDefinitions } from '@hooks/useDefinitions'

import { DefinitionModule } from '@typings/definition'

import { Link } from '@themes/link'
import { Heading } from '@themes/heading'
import { Flex } from '@themes/flex'
import { Box } from '@themes/box'
import { Code } from '@themes/code'
import { Skeleton } from '@themes/skeleton'

import { MobileIcon } from '@radix-ui/react-icons'

import { GlowPanel } from '@components/GlowPanel'
import { Typewriter } from '@components/TypeWriter'
import { LegacyCopyButton } from '@components/CopyButton/legacy'

export const Contact: FunctionComponent = (): VNode => {
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
          <Box width="200px" height="30px" />
        </Skeleton>
        <Flex direction="column" gap="2">
          {[1, 2, 3].map((_, index) => (
            <Skeleton key={index}>
              <Box width="100%" height="20px" />
            </Skeleton>
          ))}
        </Flex>
      </Flex>,
    )
  }

  if (error) {
    return layout(<div>Error loading definitions</div>)
  }

  const { app, index } = definitions

  return layout(
    <Fragment>
      <Link href={app.path[4].path}>
        <Heading size="6" mb="4">
          <Flex align="center" gap="2">
            <MobileIcon width="24" height="24" />
            {index._contact}
          </Flex>
        </Heading>
      </Link>
      <Flex direction="column" gap="2">
        <Flex align="center" gap="3">
          <Code>{index._phone}</Code>
          {index.phone.map(p => (
            <Fragment key={p}>
              <Typewriter text={p} speed={50} />
              <LegacyCopyButton textToCopy={p} />
            </Fragment>
          ))}
        </Flex>
        <Flex align="center" gap="3">
          <Code>{index._email}</Code>
          <Typewriter text={index.email} speed={50} />
          <LegacyCopyButton textToCopy={index.email} />
        </Flex>
        <Flex align="center" gap="3">
          <Code>{index._wechat}</Code>
          <Typewriter text={index.wechat} speed={50} />
          <LegacyCopyButton textToCopy={index.wechat} />
        </Flex>
      </Flex>
    </Fragment>,
  )
}
