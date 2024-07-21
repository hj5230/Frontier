import { h, VNode } from 'preact'
import { Layout } from 'antd'

const { Header } = Layout

const Navbar: React.FC = (): VNode => {
  return (
    <Header
      style={{
        padding: 0,
      }}
    />
  )
}

export default Navbar
