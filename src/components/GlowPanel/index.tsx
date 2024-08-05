import { h, FunctionComponent, VNode } from 'preact'
import { Card, Button } from '@radix-ui/themes'
import { useState } from 'preact/hooks'

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
  const [isHovered, setIsHovered] = useState(false)

  const containerStyle: preact.JSX.CSSProperties = {
    position: 'relative',
    transition:
      'transform 0.3s ease-out, box-shadow 0.3s ease-out',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    boxShadow: isHovered
      ? '0 10px 20px rgba(0,0,0,0.1)'
      : 'none',
    zIndex: isHovered ? 1 : 0,
  }

  const cardStyle: React.CSSProperties = {
    ...inputStyle,
    padding: '20px',
    transition: 'all 0.2s ease-out',
  }

  const buttonStyle: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: `${glowSpan}vh`,
    transform: 'translate(-50%, -50%)',
    zIndex: -1,
    opacity: isHovered ? 0.8 : 0.5,
    transition: 'opacity 0.3s ease-out',
  }

  return (
    <div
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card style={cardStyle}>{children}</Card>
      <Button size="4" style={buttonStyle} />
    </div>
  )
}

export default GlowPanel
