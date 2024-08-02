import { h, FunctionComponent, VNode } from 'preact'
import { useState, useEffect } from 'preact/hooks'

interface NotificationProps {
  title: string
  message: string
  type?: 'info' | 'success' | 'warning' | 'error'
  timeout?: number
}

const Notification: FunctionComponent<
  NotificationProps
> = ({ title, message, type = 'info', timeout }): VNode => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (timeout !== 0) {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, timeout || 2000)

      return () => clearTimeout(timer)
    }
  }, [timeout])

  if (!isVisible) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: getBackgroundColor(type),
        color: '#fff',
        padding: '15px',
        borderRadius: '5px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        zIndex: 1000,
        maxWidth: '300px',
        width: '100%',
      }}
    >
      <h3
        style={{ margin: '0 0 10px 0', fontSize: '18px' }}
      >
        {title}
      </h3>
      <p style={{ margin: 0, fontSize: '14px' }}>
        {message}
      </p>
    </div>
  )
}

function getBackgroundColor(
  type: NotificationProps['type'],
): string {
  switch (type) {
    case 'success':
      return '#4CAF50'
    case 'error':
      return '#F44336'
    case 'warning':
      return '#FF9800'
    case 'info':
    default:
      return '#2196F3'
  }
}

export default Notification
