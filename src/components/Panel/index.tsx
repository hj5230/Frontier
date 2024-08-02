import { h, FunctionComponent, VNode } from 'preact'

import { Card, ScrollArea } from '@radix-ui/themes'

interface PanelProps {
  children: VNode | React.ReactNode
  inputStyle?: React.CSSProperties
}

const Panel: FunctionComponent<PanelProps> = ({
  children,
  inputStyle,
}): VNode => {
  const panelStyle = {
    ...inputStyle,
  }

  return (
    <Card style={panelStyle}>
      <ScrollArea>{children}</ScrollArea>
    </Card>
  )
}

export default Panel
