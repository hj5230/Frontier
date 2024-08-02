import { h, FunctionComponent, VNode } from 'preact'

import {
  Flex,
  Heading,
  Strong,
  Text,
} from '@radix-ui/themes'
import { PersonIcon } from '@radix-ui/react-icons'

import GlowPanel from '@components/GlowPanel'

import resume_definition from '@assets/definition.resume'

const PersonalInfo: FunctionComponent = (): VNode => {
  return (
    <GlowPanel>
      <Flex justify="between" align="center" mb="4">
        <Heading size="6">
          <Flex align="center" gap="2">
            <PersonIcon width="24" height="24" />
            {resume_definition._personal_info}
          </Flex>
        </Heading>
      </Flex>
      <Flex direction="column" gap="3">
        <Strong>{resume_definition.about_me}</Strong>
        <Text>{resume_definition.more_about_me}</Text>
      </Flex>
    </GlowPanel>
  )
}

export default PersonalInfo
