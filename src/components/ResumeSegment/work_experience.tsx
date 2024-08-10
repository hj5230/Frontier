import { h, FunctionComponent, VNode } from 'preact'

import { Badge } from '@themes/badge'
import { Blockquote } from '@themes/blockquote'
import { Card } from '@themes/card'
import { Em } from '@themes/em'
import { Flex } from '@themes/flex'
import { Heading } from '@themes/heading'
import { Text } from '@themes/text'
import { BackpackIcon } from '@radix-ui/react-icons'

import { GlowPanel } from '@components/GlowPanel'
import { Typewriter } from '@components/TypeWriter'

import resume_definition from '@assets/definition.resume'

export const WorkExperience: FunctionComponent =
  (): VNode => {
    return (
      <GlowPanel>
        <Flex justify="between" align="center" mb="4">
          <Heading size="6">
            <Flex align="center" gap="2">
              <BackpackIcon width="24" height="24" />
              {resume_definition._work}
            </Flex>
          </Heading>
          <Flex gap="2">
            {resume_definition.work_keywords.map(k => (
              <Badge color={k.color}>{k.text}</Badge>
            ))}
          </Flex>
        </Flex>
        <Flex direction="column" gap="3">
          {resume_definition.work.map(w => {
            const children = (
              <Flex direction="column" gap="1">
                <Heading size="4">{w.company}</Heading>
                <Flex justify="end">
                  <Text as="p" color="gray" size="2">
                    {w.period}
                  </Text>
                </Flex>
                <Em>{`${w.department} - ${w.role}`}</Em>
                {w.description.map(d => (
                  <Blockquote>
                    <Typewriter text={d} />
                  </Blockquote>
                ))}
              </Flex>
            )

            if (w.themeColor)
              return (
                <Card
                  style={{
                    border: `1px solid ${w.themeColor}`,
                  }}
                >
                  {children}
                </Card>
              )
            else return <Card>{children}</Card>
          })}
        </Flex>
      </GlowPanel>
    )
  }
