import {
  h,
  FunctionComponent,
  VNode,
  Fragment,
} from 'preact'

import { useDefinitions } from '@hooks/useDefinitions'

import { DefinitionModule } from '@typings/definition'

import { Card } from '@themes/card'
import { Em } from '@themes/em'
import { Flex } from '@themes/flex'
import { Heading } from '@themes/heading'
import { Text } from '@themes/text'
import { Skeleton } from '@themes/skeleton'

import { CodeIcon } from '@radix-ui/react-icons'

import { GlowPanel } from '@components/GlowPanel'
import { Typewriter } from '@components/TypeWriter'

export const TechStack: FunctionComponent = (): VNode => {
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
        </Flex>
        <Flex direction="column" gap="3">
          {[1, 2, 3].map((_, index) => (
            <Skeleton key={index}>
              <Card style={{ height: '120px' }} />
            </Skeleton>
          ))}
        </Flex>
      </Fragment>,
    )
  }

  if (error) {
    return layout(
      <div>Error loading tech stack information</div>,
    )
  }

  const { resume } = definitions

  return layout(
    <Fragment>
      <Flex justify="between" align="center" mb="4">
        <Heading size="6">
          <Flex align="center" gap="2">
            <CodeIcon width="24" height="24" />
            {resume._tech_stack}
          </Flex>
        </Heading>
      </Flex>
      <Flex direction="column" gap="3">
        {resume.tech_stack.map(t => {
          const children = (
            <Flex direction="column">
              <Heading size="4">{t.title}</Heading>
              <Text>{t.description}</Text>
              {t.comment && (
                <Text size="2">
                  <Em>
                    <Typewriter text={t.comment} />
                  </Em>
                </Text>
              )}
            </Flex>
          )
          return t.themeColor ? (
            <Card
              key={t.title}
              style={{
                border: `1px solid ${t.themeColor}`,
              }}
            >
              {children}
            </Card>
          ) : (
            <Card key={t.title}>{children}</Card>
          )
        })}
      </Flex>
    </Fragment>,
  )
}
