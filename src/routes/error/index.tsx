import { h, FunctionComponent, VNode } from 'preact'

import { useEffect, useState } from 'preact/hooks'

import app_definition from '@assets/definition.app'

const $error: FunctionComponent = (): VNode => {
  const [count, setCount] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => {
        if (prevCount === 1) {
          clearInterval(timer)
          window.location.href = app_definition.path[0].path
        }
        return prevCount - 1
      })
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <h1>{app_definition.$error_title}</h1>
      <p>
        <strong>
          {app_definition.$error_redirect.replace(
            '$',
            count.toString(),
          )}
        </strong>
      </p>
      <p>
        <small>{app_definition.$error_description}</small>
      </p>
    </div>
  )
}

export default $error
