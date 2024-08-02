import { h, FunctionComponent, VNode } from 'preact'

import { Container } from '@radix-ui/themes'

import GlowPanel from '@components/GlowPanel'

const Project: FunctionComponent = (): VNode => {
  return (
    <Container
      size="4"
      py="6"
      style={{ maxWidth: '90%', margin: '0 auto' }}
    >
      <GlowPanel>Project</GlowPanel>
    </Container>
  )
}

export default Project
