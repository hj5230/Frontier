import { useState, useCallback } from 'preact/hooks'

type NotificationType =
  | 'info'
  | 'success'
  | 'warning'
  | 'error'

interface NotificationState {
  show: boolean
  title: string
  message: string
  type: NotificationType
}

export const useNotification = () => {
  const [notification, setNotification] =
    useState<NotificationState>({
      show: false,
      title: '',
      message: '',
      type: 'info',
    })

  const showNotification = useCallback(
    (
      title: string,
      message: string,
      type: NotificationType,
    ) => {
      setNotification({ show: true, title, message, type })
    },
    [],
  )

  const hideNotification = useCallback(() => {
    setNotification(prev => ({ ...prev, show: false }))
  }, [])

  return {
    notification,
    showNotification,
    hideNotification,
  }
}
