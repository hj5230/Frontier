import { h, FunctionComponent, VNode } from 'preact'

import { Card } from '@radix-ui/themes'

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
      <div className="inner-scroll">
        <div className="inner-constraint">{children}</div>
      </div>
    </Card>
  )
}

export default Panel
