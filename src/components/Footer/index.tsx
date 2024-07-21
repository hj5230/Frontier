import { h, VNode, Fragment } from 'preact'
import { Layout } from 'antd'
import { useState } from 'preact/hooks'
import { IEnv } from '@interfaces/env'

interface Props {
  env: IEnv
}

const Footer: React.FC<Props> = (props): VNode => {
  const [versions] = useState({
    userAgent: navigator.userAgent,
  })

  return (
    <Layout.Footer style={{ textAlign: 'center' }}>
      {props.env.NODE_ENV === 'development' ? (
        <Fragment>
          <span>{props.env}</span>
          <span>{versions.userAgent}</span>
        </Fragment>
      ) : (
        <span>{versions.userAgent}</span>
      )}
    </Layout.Footer>
  )
}

export default Footer
