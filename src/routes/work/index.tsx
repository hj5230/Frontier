import { h, FunctionComponent, VNode } from 'preact'

import { Flex } from '@themes/flex'
import { Heading } from '@themes/heading'
import { Text } from '@themes/text'
import { Badge } from '@themes/badge'
import { Blockquote } from '@themes/blockquote'
import { Strong } from '@themes/strong'
import { Code } from '@themes/code'

import { GlowPanel } from '@components/GlowPanel'
import { Typewriter } from '@components/TypeWriter'

import work_definition from '@assets/definition.work'

const Work: FunctionComponent = (): VNode => {
  return (
    <Flex direction="column" gap="3">
      {work_definition.work.map(w => {
        const children = (
          <Flex direction="column" gap="2">
            <Flex justify="between">
              <Heading size="6">{w.company}</Heading>
              <Flex justify="between" gap="4">
                <Flex gap="2">
                  {w.keywords &&
                    w.keywords.map(k => (
                      <Badge color={k.color}>
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
            {w.description.map(d => (
              <Blockquote>
                <Typewriter text={d} />
              </Blockquote>
            ))}
          </Flex>
        )

        if (w.themeColor)
          return (
            <GlowPanel
              inputStyle={{
                border: `1px solid ${w.themeColor}`,
              }}
            >
              {children}
            </GlowPanel>
          )
        else return <GlowPanel>{children}</GlowPanel>
      })}
    </Flex>
  )
}

export default Work
