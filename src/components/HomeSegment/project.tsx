import { h, FunctionComponent, VNode } from 'preact'

import { Link } from '@themes/link'
import { Heading } from '@themes/heading'
import { Flex } from '@themes/flex'
import { Text } from '@themes/text'
import { Blockquote } from '@themes/blockquote'
import { Box } from '@themes/box'
import { CubeIcon } from '@radix-ui/react-icons'

import GlowPanel from '@components/GlowPanel'
import Typewriter from '@components/TypeWriter'
import Media from '@components/Media'

import app_definition from '@assets/definition.app'
import definition from '@assets/definition.index'

const Project: FunctionComponent = (): VNode => {
  return (
    <GlowPanel>
      <Link href={app_definition.path[2].path}>
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
              {p.image_uri && (
                <Media uri={p.image_uri} type="image" />
              )}
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
