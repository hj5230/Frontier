import { h, FunctionComponent, VNode } from 'preact'

import { Grid } from '@themes/grid'
import { Flex } from '@themes/flex'

import {
  Education,
  Language,
  WorkExperience,
  TechStack,
} from '@components/ResumeSegment'

const Resume: FunctionComponent = (): VNode => {
  return (
    <Grid columns="3" gap="4">
      <Flex direction="column" gap="4">
        <Education />
        <Language />
      </Flex>
      <Flex direction="column" gap="4">
        <WorkExperience />
      </Flex>
      <Flex direction="column" gap="4">
        <TechStack />
      </Flex>
    </Grid>
  )
}

export default Resume
