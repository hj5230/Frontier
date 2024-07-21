import { h, VNode } from 'preact'
import { Layout } from 'antd'
import { useState } from 'preact/hooks'

const Footer: React.FC = (): VNode => {
  const [versions] = useState({
    userAgent: navigator.userAgent,
  })

  return (
    <Layout.Footer style={{ textAlign: 'center' }}>
      <span>{versions.userAgent}</span>
    </Layout.Footer>
  )
}

export default Footer
