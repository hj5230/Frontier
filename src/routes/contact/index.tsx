import { h, FunctionComponent, VNode } from 'preact'

import { Flex } from '@themes/flex'
import { Grid } from '@themes/grid'
import { Heading } from '@themes/heading'
import { Text } from '@themes/text'
import { Code } from '@themes/code'
import { Link } from '@themes/link'
import { MobileIcon } from '@radix-ui/react-icons'

import GlowPanel from '@components/GlowPanel'
import Typewriter from '@components/TypeWriter'
import LegacyCopyButton from '@components/CopyButton/legacy'

import contact_definition from '@assets/definition.contact'

const Contact: FunctionComponent = (): VNode => {
  return (
    <GlowPanel>
      <Flex direction="column">
        <Heading size="6" mb="6">
          <Flex align="center" gap="2">
            <MobileIcon width="24" height="24" />
            {contact_definition._contact}
          </Flex>
        </Heading>
      </Flex>
      <Grid columns="2">
        <Flex direction="column" gap="4">
          <Flex align="center" gap="6">
            <Code size="4">
              {contact_definition._phone}
            </Code>
            <Flex direction="column" gap="3">
              {contact_definition.phone.map(p => (
                <Flex gap="3">
                  <Text>{p}</Text>
                  <LegacyCopyButton textToCopy={p} />
                </Flex>
              ))}
            </Flex>
          </Flex>
          <Flex align="center" gap="6">
            <Code size="4">
              {contact_definition._email}
            </Code>
            <Flex gap="3">
              <Text>{contact_definition.email}</Text>
              <LegacyCopyButton
                textToCopy={contact_definition.email}
              />
            </Flex>
          </Flex>
          <Flex align="center" gap="6">
            <Code size="4">
              {contact_definition._wechat}
            </Code>
            <Flex gap="3">
              <Text>{contact_definition.wechat}</Text>
              <LegacyCopyButton
                textToCopy={contact_definition.wechat}
              />
            </Flex>
          </Flex>
          <Flex align="center" gap="6">
            <Code size="4">
              {contact_definition._linkedin}
            </Code>
            <Flex gap="3">
              <Text>{contact_definition.linkedin}</Text>
            </Flex>
          </Flex>
          <Flex align="center" gap="2">
            <Code size="4">
              {contact_definition._github}
            </Code>
            <Flex>
              <Link href={contact_definition.github}>
                <Text>{contact_definition.github}</Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <Flex justify="end">
          <Typewriter text={contact_definition.comment} />
        </Flex>
      </Grid>
    </GlowPanel>
  )
}

export default Contact
