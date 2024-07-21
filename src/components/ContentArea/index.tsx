import { h, VNode } from 'preact'
import { Layout } from 'antd'

const { Content } = Layout

const ContentArea: React.FC = (): VNode => {
  return (
    <Content style={{ margin: '0 16px' }}>
      {/* <Breadcrumb items={} style={{ margin: '16px 0' }} /> */}
      <div
        style={{
          padding: 24,
          minHeight: 360,
        }}
      >
        Bill is a cat.
      </div>
    </Content>
  )
}

export default ContentArea
