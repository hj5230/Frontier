import { h, FunctionComponent, VNode } from 'preact'

import { Box, Flex, Heading, Text } from '@radix-ui/themes'
import { KeyboardIcon } from '@radix-ui/react-icons'

import GlowPanel from '@components/GlowPanel'
import Typewriter from '@components/TypeWriter'

import home_definition from '@assets/definition.home'

const Experience: FunctionComponent = (): VNode => {
  return (
    <GlowPanel>
      <Heading size="6" mb="4">
        <Flex align="center" gap="2">
          <KeyboardIcon width="24" height="24" />
          {home_definition._experience}
        </Flex>
      </Heading>
      <Flex direction="column" gap="4">
        {home_definition.experience.map(e => (
          <Box key={e.title}>
            <Flex direction="column" gap="1">
              <Flex justify="between" align="center">
                <Text as="p" weight="bold">
                  {e.title}
                </Text>
                <Text as="p" color="gray" size="2">
                  {e.period}
                </Text>
              </Flex>
              {e.description.map((d, index) => (
                <Typewriter
                  key={index}
                  text={`- ${d}`}
                  soft
                />
              ))}
            </Flex>
          </Box>
        ))}
      </Flex>
    </GlowPanel>
  )
}

export default Experience
