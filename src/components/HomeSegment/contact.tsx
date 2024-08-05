import {
  h,
  FunctionComponent,
  VNode,
  Fragment,
} from 'preact'

import { Code, Flex, Heading, Link } from '@radix-ui/themes'

import { MobileIcon } from '@radix-ui/react-icons'

import GlowPanel from '@components/GlowPanel'
import Typewriter from '@components/TypeWriter'
import LegacyCopyButton from '@components/CopyButton/legacy'

import app_definition from '@assets/definition.app'
import definition from '@assets/definition.index'

const Contact: FunctionComponent = (): VNode => {
  return (
    <GlowPanel>
      <Link href={app_definition.path[4].path}>
        <Heading size="6" mb="4">
          <Flex align="center" gap="2">
            <MobileIcon width="24" height="24" />
            {definition._contact}
          </Flex>
        </Heading>
      </Link>
      <Flex direction="column" gap="2">
        <Flex align="center" gap="3">
          <Code>{definition._phone}</Code>
          {definition.phone.map(p => (
            <Fragment key={p}>
              <Typewriter text={p} speed={50} />
              <LegacyCopyButton textToCopy={p} />
            </Fragment>
          ))}
        </Flex>
        <Flex align="center" gap="3">
          <Code>{definition._email}</Code>
          <Typewriter text={definition.email} speed={50} />
          <LegacyCopyButton textToCopy={definition.email} />
        </Flex>
        <Flex align="center" gap="3">
          <Code>{definition._wechat}</Code>
          <Typewriter text={definition.wechat} speed={50} />
          <LegacyCopyButton
            textToCopy={definition.wechat}
          />
        </Flex>
      </Flex>
    </GlowPanel>
  )
}

export default Contact
