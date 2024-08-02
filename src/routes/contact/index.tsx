import { h, FunctionComponent, VNode } from 'preact'

import { Container } from '@radix-ui/themes'

import GlowPanel from '@components/GlowPanel'

const Contact: FunctionComponent = (): VNode => {
  return (
    <Container
      size="4"
      py="6"
      style={{ maxWidth: '90%', margin: '0 auto' }}
    >
      <GlowPanel>Contact</GlowPanel>
    </Container>
  )
}

export default Contact
