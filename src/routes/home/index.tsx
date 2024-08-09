import { h, FunctionComponent, VNode } from 'preact'

import { Grid } from '@themes/grid'
import { Flex } from '@themes/flex'

import Header from '@components/HomeSegment/header'
import Intro from '@components/HomeSegment/intro'
import Contact from '@components/HomeSegment/contact'
import Experience from '@components/HomeSegment/experience'
import Project from '@components/HomeSegment/project'

const Home: FunctionComponent = (): VNode => {
  return (
    <Grid columns="2" gap="4">
      {/* Left column */}
      <Flex direction="column" gap="4">
        {/* Header */}
        <Header />
        {/* Project */}
        <Project />
      </Flex>
      {/* Right column */}
      <Flex direction="column" gap="4">
        {/* Intro */}
        <Intro />
        {/* Experience */}
        <Experience />
        {/* Contact */}
        <Contact />
      </Flex>
    </Grid>
  )
}

export default Home
