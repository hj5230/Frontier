import {
  h,
  FunctionComponent,
  VNode,
  Fragment,
} from 'preact'

import {
  Badge,
  Flex,
  Heading,
  Link,
} from '@radix-ui/themes'

import { CopyIcon, MobileIcon } from '@radix-ui/react-icons'

import GlowPanel from '@components/GlowPanel'
import Typewriter from '@components/TypeWriter'

import navbar_definition from '@assets/definition.navbar'
import home_definition from '@assets/definition.home'

const Contact: FunctionComponent = (): VNode => {
  return (
    <GlowPanel>
      <Link
        href={navbar_definition.navigator_items[3].path}
      >
        <Heading size="6" mb="4">
          <Flex align="center" gap="2">
            <MobileIcon width="24" height="24" />
            {home_definition._contact}
          </Flex>
        </Heading>
      </Link>
      <Flex direction="column" gap="2">
        <Flex align="center" gap="3">
          <Badge>{home_definition._phone}</Badge>
          {home_definition.phone.map(p => (
            <Fragment>
              <Typewriter text={p} speed={50} />
              <CopyIcon />
            </Fragment>
          ))}
        </Flex>
        <Flex align="center" gap="3">
          <Badge>{home_definition._email}</Badge>
          <Typewriter
            text={home_definition.email}
            speed={50}
          />
          <CopyIcon />
        </Flex>
        <Flex align="center" gap="3">
          <Badge>{home_definition._wechat}</Badge>
          <Typewriter
            text={home_definition.wechat}
            speed={50}
          />
          <CopyIcon />
        </Flex>
      </Flex>
    </GlowPanel>
  )
}

export default Contact
