import { h, FunctionComponent, VNode } from 'preact'

import { Card } from '@themes/card'
import { Badge } from '@themes/badge'
import { Flex } from '@themes/flex'
import { Heading } from '@themes/heading'
import { Text } from '@themes/text'
import { GlobeIcon } from '@radix-ui/react-icons'

import { LangLevel } from '@typings/lang_level'

import { GlowPanel } from '@components/GlowPanel'

import definition from '@assets/definition.index'
import resume_definition from '@assets/definition.resume'

export const Language: FunctionComponent = (): VNode => {
  return (
    <GlowPanel>
      <Flex justify="between" align="center" mb="4">
        <Heading size="6">
          <Flex align="center" gap="2">
            <GlobeIcon width="24" height="24" />
            {resume_definition._language}
          </Flex>
        </Heading>
      </Flex>
      <Flex direction="column" gap="3">
        {resume_definition.language.map(l => (
          <Card>
            <Flex justify="between">
              <Heading size="4">{l.lang}</Heading>
              {l.level === LangLevel.BASIC && (
                <Badge color="lime">
                  {definition._langlever.basic}
                </Badge>
              )}
              {l.level === LangLevel.INTERMEDIATE && (
                <Badge color="amber">
                  {definition._langlever.intermediate}
                </Badge>
              )}
              {l.level === LangLevel.ADVANCED && (
                <Badge color="orange">
                  {definition._langlever.advanced}
                </Badge>
              )}
              {l.level === LangLevel.NATIVE && (
                <Badge color="red">
                  {definition._langlever.native}
                </Badge>
              )}
            </Flex>
            <Text>{l.comment}</Text>
          </Card>
        ))}
      </Flex>
    </GlowPanel>
  )
}
