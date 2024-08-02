import { h, FunctionComponent, VNode } from 'preact'

import { Container, Flex, Grid } from '@radix-ui/themes'

import Header from '@components/HomeSegment/header'
import Intro from '@components/HomeSegment/intro'
import Contact from '@components/HomeSegment/contact'
import Experience from '@components/HomeSegment/experience'
import Project from '@components/HomeSegment/project'

const Home: FunctionComponent = (): VNode => {
  return (
    <Container
      size="4"
      py="6"
      style={{ maxWidth: '90%', margin: '0 auto' }}
    >
      <Grid columns="2" gap="4">
        {/* Left column */}
        <Flex direction="column" gap="4">
          {/* Header */}
          <Header />
          {/* Intro */}
          <Intro />
          {/* Project */}
          <Project />
        </Flex>
        {/* Right column */}
        <Flex direction="column" gap="4">
          {/* Experience */}
          <Experience />
          {/* Contact */}
          <Contact />
        </Flex>
      </Grid>
    </Container>
  )
}

export default Home
