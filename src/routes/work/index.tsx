import {
  h,
  FunctionComponent,
  VNode,
  Fragment,
} from 'preact'

import { useDefinitions } from '@hooks/useDefinitions'

import { DefinitionModule } from '@typings/definition'

import { Flex } from '@themes/flex'
import { Heading } from '@themes/heading'
import { Text } from '@themes/text'
import { Badge } from '@themes/badge'
import { Blockquote } from '@themes/blockquote'
import { Strong } from '@themes/strong'
import { Code } from '@themes/code'
import { Skeleton } from '@themes/skeleton'

import { GlowPanel } from '@components/GlowPanel'
import { Typewriter } from '@components/TypeWriter'

const Work: FunctionComponent = (): VNode => {
  const [definitions, loading, error] = useDefinitions(
    DefinitionModule.WORK,
  )

  const layout = (content: VNode) => (
    <Flex direction="column" gap="3">
      {content}
    </Flex>
  )

  if (loading) {
    return layout(
      <Fragment>
        {[1, 2].map((_, index) => (
          <Skeleton key={index}>
            <GlowPanel>
              <div style={{ height: '200px' }} />
            </GlowPanel>
          </Skeleton>
        ))}
      </Fragment>,
    )
  }

  if (error || !definitions) {
    return layout(
      <GlowPanel>
        <div>Error loading work experience information</div>
      </GlowPanel>,
    )
  }

  const { work } = definitions

  return layout(
    <Fragment>
      {work.work.map((w, index) => {
        const children = (
          <Flex direction="column" gap="2">
            <Flex justify="between">
              <Heading size="6">{w.company}</Heading>
              <Flex justify="between" gap="4">
                <Flex gap="2">
                  {w.keywords &&
                    w.keywords.map(k => (
                      <Badge key={k.text} color={k.color}>
                        {k.text}
                      </Badge>
                    ))}
                </Flex>
                <Text as="p" color="gray" size="2">
                  {w.period}
                </Text>
              </Flex>
            </Flex>
            <Text size="4">
              <Flex gap="4">
                <Strong>{w.department}</Strong>
                <Code>{w.role}</Code>
              </Flex>
            </Text>
            {w.description.map((d, descIndex) => (
              <Blockquote key={descIndex}>
                <Typewriter text={d} />
              </Blockquote>
            ))}
          </Flex>
        )

        return (
          <GlowPanel
            key={index}
            inputStyle={
              w.themeColor
                ? { border: `1px solid ${w.themeColor}` }
                : undefined
            }
          >
            {children}
          </GlowPanel>
        )
      })}
    </Fragment>,
  )
}

export default Work
