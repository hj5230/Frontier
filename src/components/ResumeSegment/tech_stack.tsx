import { h, FunctionComponent, VNode } from 'preact'

import {
  Card,
  Em,
  Flex,
  Heading,
  Text,
} from '@radix-ui/themes'
import { CodeIcon } from '@radix-ui/react-icons'

import GlowPanel from '@components/GlowPanel'
import Typewriter from '@components/TypeWriter'

import resume_definition from '@assets/definition.resume'

const TechStack: FunctionComponent = (): VNode => {
  return (
    <GlowPanel>
      <Flex justify="between" align="center" mb="4">
        <Heading size="6">
          <Flex align="center" gap="2">
            <CodeIcon width="24" height="24" />
            {resume_definition._tech_stack}
          </Flex>
        </Heading>
      </Flex>
      <Flex direction="column" gap="3">
        {resume_definition.tech_stack.map(t => {
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
              style={{
                border: `1px solid ${t.themeColor}`,
              }}
            >
              {children}
            </Card>
          ) : (
            <Card>{children}</Card>
          )
        })}
      </Flex>
    </GlowPanel>
  )
}

export default TechStack
