import { h, FunctionComponent, VNode } from 'preact'

import { Card } from '@themes/card'
import { Container } from '@themes/container'
import { ScrollArea } from '@themes/scroll-area'

interface PanelProps {
  children: VNode | React.ReactNode
  inputStyle?: React.CSSProperties
}

export const Panel: FunctionComponent<PanelProps> = ({
  children,
  inputStyle,
}): VNode => {
  const panelStyle = {
    ...inputStyle,
  }

  return (
    <Card style={panelStyle}>
      <ScrollArea>
        <Container
          size="4"
          py="6"
          style={{ maxWidth: '90%', margin: '0 auto' }}
        >
          {children}
        </Container>
      </ScrollArea>
    </Card>
  )
}
