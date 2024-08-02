import { h, FunctionComponent, VNode } from 'preact'

import {
  Badge,
  Card,
  Em,
  Flex,
  Heading,
  Text,
} from '@radix-ui/themes'
import { BookmarkIcon } from '@radix-ui/react-icons'

import GlowPanel from '@components/GlowPanel'
import Typewriter from '@components/TypeWriter'

import resume_definition from '@assets/definition.resume'

const Education: FunctionComponent = (): VNode => {
  return (
    <GlowPanel>
      <Flex justify="between" align="center" mb="4">
        <Heading size="6">
          <Flex align="center" gap="2">
            <BookmarkIcon width="24" height="24" />
            {resume_definition._education}
          </Flex>
        </Heading>
        {resume_definition.education_keywords.map(k => (
          <Badge color={k.color}>{k.text}</Badge>
        ))}
      </Flex>
      <Flex direction="column" gap="3">
        {resume_definition.education.map(e => {
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
              style={{
                border: `1px solid ${e.themeColor}`,
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

export default Education
