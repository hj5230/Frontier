import { h, FunctionComponent, VNode } from 'preact'
import { Card, Button } from '@radix-ui/themes'

interface GlowPanelProps {
  children: VNode | React.ReactNode
  glowSpan?: number
  inputStyle?: React.CSSProperties
}

const GlowPanel: FunctionComponent<GlowPanelProps> = ({
  children,
  glowSpan = 20,
  inputStyle,
}): VNode => {
  return (
    <div style={{ position: 'relative' }}>
      <Card style={inputStyle}>{children}</Card>
      <Button
        size="4"
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: `${glowSpan}vh`,
          transform: 'translate(-50%, -50%)',
          zIndex: -1,
        }}
      />
    </div>
  )
}

export default GlowPanel
