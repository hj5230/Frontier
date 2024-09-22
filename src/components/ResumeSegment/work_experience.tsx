import {
  h,
  FunctionComponent,
  VNode,
  Fragment,
} from 'preact'

import { useDefinitions } from '@hooks/useDefinitions'

import { DefinitionModule } from '@typings/definition'

import { Badge } from '@themes/badge'
import { Blockquote } from '@themes/blockquote'
import { Card } from '@themes/card'
import { Em } from '@themes/em'
import { Flex } from '@themes/flex'
import { Heading } from '@themes/heading'
import { Text } from '@themes/text'
import { Skeleton } from '@themes/skeleton'

import { BackpackIcon } from '@radix-ui/react-icons'

import { GlowPanel } from '@components/GlowPanel'
import { Typewriter } from '@components/TypeWriter'

export const WorkExperience: FunctionComponent =
  (): VNode => {
    const [definitions, loading, error] = useDefinitions(
      DefinitionModule.RESUME,
    )

    const layout = (content: VNode) => (
      <GlowPanel>{content}</GlowPanel>
    )

    if (loading) {
      return layout(
        <Fragment>
          <Flex justify="between" align="center" mb="4">
            <Skeleton>
              <Heading size="6">Loading...</Heading>
            </Skeleton>
            <Flex gap="2">
              <Skeleton>
                <Badge>Loading</Badge>
              </Skeleton>
              <Skeleton>
                <Badge>Loading</Badge>
              </Skeleton>
            </Flex>
          </Flex>
          <Flex direction="column" gap="3">
            {[1, 2].map((_, index) => (
              <Skeleton key={index}>
                <Card style={{ height: '200px' }} />
              </Skeleton>
            ))}
          </Flex>
        </Fragment>,
      )
    }

    if (error) {
      return layout(
        <div>
          Error loading work experience information
        </div>,
      )
    }

    const { resume } = definitions

    return layout(
      <Fragment>
        <Flex justify="between" align="center" mb="4">
          <Heading size="6">
            <Flex align="center" gap="2">
              <BackpackIcon width="24" height="24" />
              {resume._work}
            </Flex>
          </Heading>
          <Flex gap="2">
            {resume.work_keywords.map(k => (
              <Badge key={k.text} color={k.color}>
                {k.text}
              </Badge>
            ))}
          </Flex>
        </Flex>
        <Flex direction="column" gap="3">
          {resume.work.map(w => {
            const children = (
              <Flex direction="column" gap="1">
                <Heading size="4">{w.company}</Heading>
                <Flex justify="end">
                  <Text as="p" color="gray" size="2">
                    {w.period}
                  </Text>
                </Flex>
                <Em>{`${w.department} - ${w.role}`}</Em>
                {w.description.map((d, index) => (
                  <Blockquote key={index}>
                    <Typewriter text={d} />
                  </Blockquote>
                ))}
              </Flex>
            )

            return (
              <Card
                key={w.company}
                style={
                  w.themeColor
                    ? {
                        border: `1px solid ${w.themeColor}`,
                      }
                    : undefined
                }
              >
                {children}
              </Card>
            )
          })}
        </Flex>
      </Fragment>,
    )
  }
