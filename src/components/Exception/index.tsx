import { h, VNode, FunctionComponent } from 'preact'

import { Heading } from '@themes/heading'

import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

export const Exception: FunctionComponent = (): VNode => {
  return (
    <div style={{ textAlign: 'center' }}>
      <ExclamationTriangleIcon width="48" height="48" />
      <br />
      <br />
      <Heading>出现错误</Heading>
    </div>
  )
}
