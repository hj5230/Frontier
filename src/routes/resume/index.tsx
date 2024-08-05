import { h, FunctionComponent, VNode } from 'preact'

import { Flex, Grid } from '@radix-ui/themes'

import Education from '@components/ResumeSegment/education'
import WorkExperience from '@components/ResumeSegment/work_experience'
import TechStack from '@components/ResumeSegment/tech_stack'
import Language from '@components/ResumeSegment/language'

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
