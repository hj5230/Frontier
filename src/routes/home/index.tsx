import {
  h,
  FunctionComponent,
  VNode,
  Fragment,
} from 'preact'
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Avatar,
  Badge,
  Link,
} from '@radix-ui/themes'
import {
  RocketIcon,
  PersonIcon,
  KeyboardIcon,
  CubeIcon,
  MobileIcon,
} from '@radix-ui/react-icons'
import GlowPanel from '@components/GlowPanel'
import Typewriter from '@components/TypeWriter'

import definition from '@assets/definition'

const Home: FunctionComponent = (): VNode => {
  return (
    <Container
      size="3"
      py="6"
      style={{ overflow: 'hidden' }}
    >
      <Flex direction="column" gap="6">
        <Flex align="center" gap="6">
          <Avatar
            size="9"
            src={definition.avatar_uri}
            fallback="hj5230"
            radius="full"
          />
          <Box>
            <Heading size="8" mb="2">
              {definition.name}
            </Heading>
            <Text size="5" color="gray">
              <Typewriter text={definition.intro} />
            </Text>
          </Box>
        </Flex>
        <GlowPanel>
          <Heading size="6" mb="4">
            <Flex align="center" gap="2">
              <PersonIcon width="24" height="24" />
              {definition._about_me}
            </Flex>
          </Heading>
          <Text as="p" size="3" mb="4">
            <Typewriter text={definition.about_me} />
          </Text>
          <Flex wrap="wrap" gap="2">
            {definition.badges.map(b => (
              <Badge>{b.text}</Badge> // badge color undone, type constrains in 'blue' | 'green' | ...
            ))}
          </Flex>
        </GlowPanel>
        <GlowPanel>
          <Heading size="6" mb="4">
            <Flex align="center" gap="2">
              <KeyboardIcon width="24" height="24" />
              {definition._experience}
            </Flex>
          </Heading>
          <Flex direction="column" gap="4">
            {definition.experience.map(e => (
              <Box>
                <Text as="p" weight="bold">
                  {e.title}
                </Text>
                <Text as="p" color="gray">
                  {e.period}
                </Text>
                <Text as="p" size="2">
                  {e.description.map(d => (
                    <Fragment>
                      <Typewriter text={`- ${d}`} />
                      <br />
                    </Fragment>
                  ))}
                </Text>
              </Box>
            ))}
          </Flex>
        </GlowPanel>
        <GlowPanel>
          <Heading size="6" mb="4">
            <Flex align="center" gap="2">
              <CubeIcon width="24" height="24" />
              {definition._project}
            </Flex>
          </Heading>
          <Flex direction="column" gap="4">
            {definition.project.map(p => (
              <Box>
                <Text as="p" weight="bold">
                  {p.title}
                </Text>
                <Text as="p" size="2">
                  <Typewriter text={p.description} />
                </Text>
                <Link href={p.link}>
                  <Text>{p.link}</Text>
                </Link>
              </Box>
            ))}
          </Flex>
        </GlowPanel>
        <GlowPanel>
          <Flex align="center" justify="between">
            <Text size="5" weight="bold">
              <MobileIcon width="24" height="24" />
              {definition._contact}
            </Text>
            <Box>
              <Badge>{definition._phone}</Badge>
              {definition.phone.map(p => (
                <Fragment>
                  <br />
                  <Text>{p}</Text>
                </Fragment>
              ))}
            </Box>
            <Box>
              <Badge>{definition._email}</Badge>
              <br />
              <Text>{definition.email}</Text>
            </Box>
            <Box>
              <Badge>{definition._wechat}</Badge>
              <br />
              <Text>{definition.wechat}</Text>
            </Box>
            <Box>
              <Text
                size="3"
                style={{ textDecoration: 'none' }}
              >
                <Flex align="center" gap="2">
                  <RocketIcon />
                  Let's Connect
                </Flex>
              </Text>
            </Box>
          </Flex>
        </GlowPanel>
      </Flex>
    </Container>
  )
}

export default Home
