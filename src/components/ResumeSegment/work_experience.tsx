import { h, FunctionComponent, VNode } from 'preact'

import {
  Badge,
  Blockquote,
  Card,
  Em,
  Flex,
  Heading,
  Text,
} from '@radix-ui/themes'
import { BackpackIcon } from '@radix-ui/react-icons'

import GlowPanel from '@components/GlowPanel'
import Typewriter from '@components/TypeWriter'

import resume_definition from '@assets/definition.resume'

const WorkExperience: FunctionComponent = (): VNode => {
  return (
    <GlowPanel>
      <Flex justify="between" align="center" mb="4">
        <Heading size="6">
          <Flex align="center" gap="2">
            <BackpackIcon width="24" height="24" />
            {resume_definition._work}
          </Flex>
        </Heading>
        {resume_definition.work_keywords.map(k => (
          <Badge color={k.color}>{k.text}</Badge>
        ))}
      </Flex>
      <Flex direction="column" gap="3">
        {resume_definition.work.map(w => (
          <Card>
            <Flex direction="column" gap="1">
              <Flex justify="between">
                <Heading size="4">{w.company}</Heading>
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
          </Card>
        ))}
      </Flex>
    </GlowPanel>
  )
}

export default WorkExperience
