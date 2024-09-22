import {
  h,
  FunctionComponent,
  VNode,
  Fragment,
} from 'preact'

import { useDefinitions } from '@hooks/useDefinitions'

import { DefinitionModule } from '@typings/definition'

import { Flex } from '@themes/flex'
import { Grid } from '@themes/grid'
import { Heading } from '@themes/heading'
import { Text } from '@themes/text'
import { Code } from '@themes/code'
import { Link } from '@themes/link'
import { Skeleton } from '@themes/skeleton'

import { MobileIcon } from '@radix-ui/react-icons'

import { GlowPanel } from '@components/GlowPanel'
import { Typewriter } from '@components/TypeWriter'
import { LegacyCopyButton } from '@components/CopyButton/legacy'

const Contact: FunctionComponent = (): VNode => {
  const [definitions, loading, error] = useDefinitions(
    DefinitionModule.CONTACT,
  )

  const layout = (content: VNode) => (
    <GlowPanel>{content}</GlowPanel>
  )

  if (loading) {
    return layout(
      <Fragment>
        <Flex direction="column">
          <Skeleton>
            <Heading size="6" mb="6">
              Loading...
            </Heading>
          </Skeleton>
        </Flex>
        <Grid columns="2">
          <Flex direction="column" gap="4">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <Skeleton key={index}>
                <Flex
                  align="center"
                  gap="6"
                  style={{ height: '30px' }}
                />
              </Skeleton>
            ))}
          </Flex>
          <Skeleton>
            <Flex
              justify="end"
              style={{ height: '100px' }}
            />
          </Skeleton>
        </Grid>
      </Fragment>,
    )
  }

  if (error) {
    return layout(
      <div>Error loading contact information</div>,
    )
  }

  const { contact } = definitions

  return layout(
    <Fragment>
      <Flex direction="column">
        <Heading size="6" mb="6">
          <Flex align="center" gap="2">
            <MobileIcon width="24" height="24" />
            {contact._contact}
          </Flex>
        </Heading>
      </Flex>
      <Grid columns="2">
        <Flex direction="column" gap="4">
          <Flex align="center" gap="6">
            <Code size="4">{contact._phone}</Code>
            <Flex direction="column" gap="3">
              {contact.phone.map(p => (
                <Flex key={p} gap="3">
                  <Text>{p}</Text>
                  <LegacyCopyButton textToCopy={p} />
                </Flex>
              ))}
            </Flex>
          </Flex>
          <Flex align="center" gap="6">
            <Code size="4">{contact._email}</Code>
            <Flex gap="3">
              <Text>{contact.email}</Text>
              <LegacyCopyButton
                textToCopy={contact.email}
              />
            </Flex>
          </Flex>
          <Flex align="center" gap="6">
            <Code size="4">{contact._wechat}</Code>
            <Flex gap="3">
              <Text>{contact.wechat}</Text>
              <LegacyCopyButton
                textToCopy={contact.wechat}
              />
            </Flex>
          </Flex>
          <Flex align="center" gap="6">
            <Code size="4">{contact._linkedin}</Code>
            <Flex gap="3">
              <Text>{contact.linkedin}</Text>
            </Flex>
          </Flex>
          <Flex align="center" gap="2">
            <Code size="4">{contact._github}</Code>
            <Flex>
              <Link href={contact.github}>
                <Text>{contact.github}</Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <Flex justify="end">
          <Typewriter text={contact.comment} />
        </Flex>
      </Grid>
    </Fragment>,
  )
}

export default Contact
