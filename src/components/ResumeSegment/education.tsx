import {
  h,
  FunctionComponent,
  VNode,
  Fragment,
} from 'preact'

import { useDefinitions } from '@hooks/useDefinitions'

import { DefinitionModule } from '@typings/definition'

import { Badge } from '@themes/badge'
import { Card } from '@themes/card'
import { Em } from '@themes/em'
import { Flex } from '@themes/flex'
import { Heading } from '@themes/heading'
import { Text } from '@themes/text'
import { Skeleton } from '@themes/skeleton'

import { BookmarkIcon } from '@radix-ui/react-icons'

import { GlowPanel } from '@components/GlowPanel'
import { Typewriter } from '@components/TypeWriter'

export const Education: FunctionComponent = (): VNode => {
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
              <Card style={{ height: '150px' }} />
            </Skeleton>
          ))}
        </Flex>
      </Fragment>,
    )
  }

  if (error) {
    console.error(error)
    return layout(
      <div>Error loading education information</div>,
    )
  }

  const { resume } = definitions

  return layout(
    <Fragment>
      <Flex justify="between" align="center" mb="4">
        <Heading size="6">
          <Flex align="center" gap="2">
            <BookmarkIcon width="24" height="24" />
            {resume._education}
          </Flex>
        </Heading>
        <Flex gap="2">
          {resume.education_keywords.map(k => (
            <Badge key={k.text} color={k.color}>
              {k.text}
            </Badge>
          ))}
        </Flex>
      </Flex>
      <Flex direction="column" gap="3">
        {resume.education.map(e => {
          const children = (
            <Flex direction="column">
              <Heading size="4">{e.institution}</Heading>
              <Flex justify="end">
                <Text as="p" color="gray" size="2">
                  {e.period}
                </Text>
              </Flex>
              <Em>
                <Typewriter text={e.degree} />
              </Em>
              <Text>{e.comment}</Text>
            </Flex>
          )
          return e.themeColor ? (
            <Card
              key={e.institution}
              style={{
                border: `1px solid ${e.themeColor}`,
              }}
            >
              {children}
            </Card>
          ) : (
            <Card key={e.institution}>{children}</Card>
          )
        })}
      </Flex>
    </Fragment>,
  )
}
