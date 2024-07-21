import { IEnv } from '@interfaces/env'
import { Provider, useSelector } from 'react-redux'
import store from '@store/index'
import { h, VNode } from 'preact'
import { useState } from 'preact/hooks'
import { ConfigProvider, Layout, theme } from 'antd'
import Sidebar from '@components/Sidebar'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import ContentArea from '@components/ContentArea'

const Wrapper: React.FC = (): VNode => {
  const env = useSelector(
    (state: { env: IEnv }) => state.env,
  )
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
          <Footer env={env} />
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

const App: React.FC = (): VNode => {
  return (
    <Provider store={store}>
      <Wrapper />
    </Provider>
  )
}

export default App
