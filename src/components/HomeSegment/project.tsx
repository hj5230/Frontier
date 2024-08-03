import { h, FunctionComponent, VNode } from 'preact'

import {
  Blockquote,
  Box,
  Flex,
  Heading,
  Link,
  Text,
} from '@radix-ui/themes'
import { CubeIcon } from '@radix-ui/react-icons'

import GlowPanel from '@components/GlowPanel'
import Typewriter from '@components/TypeWriter'
import Media from '@components/Media'

import navbar_definition from '@assets/definition.navbar'
import definition from '@assets/definition.index'

const Project: FunctionComponent = (): VNode => {
  return (
    <GlowPanel>
      <Link
        href={navbar_definition.navigator_items[2].path}
      >
        <Heading size="6" mb="4">
          <Flex align="center" gap="2">
            <CubeIcon width="24" height="24" />
            {definition._project}
          </Flex>
        </Heading>
      </Link>
      <Flex direction="column" gap="4">
        {definition.project.map(p => (
          <Box>
            <Flex direction="column" gap="1">
              <Text as="p" weight="bold">
                {p.title}
              </Text>
              <Link href={p.link}>
                <Text>{p.link}</Text>
              </Link>
              <Media uri={p.image_uri} type="image" />
              {p.description.map(d => (
                <Blockquote>
                  <Typewriter text={d} />
                </Blockquote>
              ))}
            </Flex>
          </Box>
        ))}
      </Flex>
    </GlowPanel>
  )
}

export default Project
