import { h, VNode } from 'preact'
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Card,
  Avatar,
  Badge,
} from '@radix-ui/themes'
import {
  RocketIcon,
  PersonIcon,
} from '@radix-ui/react-icons'

const Home: React.FC = (): VNode => {
  return (
    <Container size="3" py="9">
      <Flex direction="column" gap="9">
        {/* Hero Section */}
        <Flex align="center" gap="6">
          <Avatar
            size="9"
            src="https://avatars.githubusercontent.com/u/98270829?s…00&u=0a85d88786ce72fb7502b4010bbaa0d9bbdb0556&v=4"
            fallback="SZ"
            radius="full"
          />
          <Box>
            <Heading size="8" mb="2">
              John Doe
            </Heading>
            <Text size="5" color="gray">
              Full Stack Developer & AI Enthusiast
            </Text>
          </Box>
        </Flex>

        {/* About Me */}
        <Card>
          <Heading size="6" mb="4">
            <Flex align="center" gap="2">
              <PersonIcon width="24" height="24" />
              About Me
            </Flex>
          </Heading>
          <Text as="p" size="3" mb="4">
            Passionate developer with 5+ years of experience
            in creating innovative web solutions. Driven by
            curiosity and committed to continuous learning
            in the ever-evolving tech landscape.
          </Text>
          <Flex wrap="wrap" gap="2">
            <Badge color="blue">JavaScript</Badge>
            <Badge color="green">React</Badge>
            <Badge color="yellow">Node.js</Badge>
            <Badge color="red">Python</Badge>
            <Badge color="purple">Machine Learning</Badge>
          </Flex>
        </Card>

        {/* Experience */}
        <Card>
          <Heading size="6" mb="4">
            <Flex align="center" gap="2">
              Experience
            </Flex>
          </Heading>
          <Flex direction="column" gap="4">
            <Box>
              <Text as="p" weight="bold">
                Senior Developer at TechCorp
              </Text>
              <Text as="p" color="gray">
                2020 - Present
              </Text>
              <Text as="p" size="2">
                Led a team of 5 developers in creating a
                scalable e-commerce platform.
              </Text>
            </Box>
            <Box>
              <Text as="p" weight="bold">
                Full Stack Developer at WebSolutions Inc.
              </Text>
              <Text as="p" color="gray">
                2017 - 2020
              </Text>
              <Text as="p" size="2">
                Developed and maintained multiple client
                websites and web applications.
              </Text>
            </Box>
          </Flex>
        </Card>

        {/* Achievements */}
        <Card>
          <Heading size="6" mb="4">
            <Flex align="center" gap="2">
              Achievements
            </Flex>
          </Heading>
          <Flex direction="column" gap="4">
            <Box>
              <Text as="p" weight="bold">
                Best Innovative Project Award
              </Text>
              <Text as="p" size="2">
                Received for developing an AI-powered
                content recommendation system.
              </Text>
            </Box>
            <Box>
              <Text as="p" weight="bold">
                Open Source Contributor
              </Text>
              <Text as="p" size="2">
                Active contributor to React and Node.js
                ecosystems with 500+ GitHub stars.
              </Text>
            </Box>
            <Box>
              <Text as="p" weight="bold">
                Conference Speaker
              </Text>
              <Text as="p" size="2">
                Presented "Future of Web Development" at
                TechConf 2023.
              </Text>
            </Box>
          </Flex>
        </Card>

        {/* Call to Action */}
        <Card>
          <Flex align="center" justify="between">
            <Text size="5" weight="bold">
              Interested in collaboration?
            </Text>
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
        </Card>
      </Flex>
    </Container>
  )
}

export default Home
