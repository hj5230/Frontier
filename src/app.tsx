import { h, VNode } from 'preact'
import { useState } from 'preact/hooks'
import { ConfigProvider, Layout, theme } from 'antd'
import Sidebar from '@components/Sidebar'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import ContentArea from '@components/ContentArea'

const App: React.FC = (): VNode => {
  const [isDarkMode] = useState(true)

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode
          ? theme.darkAlgorithm
          : theme.defaultAlgorithm,
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          <Navbar />
          <ContentArea />
          <Footer />
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default App
