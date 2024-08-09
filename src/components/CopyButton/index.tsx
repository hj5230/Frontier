import {
  h,
  FunctionComponent,
  VNode,
  Fragment,
} from 'preact'
import { useState } from 'preact/hooks'

import Notification from '@components/Notification'
import { Button } from '@themes/button'
import CopyIcon from '@radix-ui/react-icons/dist/CopyIcon'

interface CopyButtonProps {
  textToCopy: string
}

const CopyButton: FunctionComponent<CopyButtonProps> = ({
  textToCopy,
}): VNode => {
  const [showNotification, setShowNotification] =
    useState(false)
  const [notificationMessage, setNotificationMessage] =
    useState('')
  const [notificationType, setNotificationType] = useState<
    'success' | 'error'
  >('success')

  const handleCopy = () => {
    if (
      navigator.clipboard &&
      navigator.clipboard.writeText
    ) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          setNotificationMessage('文本已复制到剪贴板！')
          setNotificationType('success')
          setShowNotification(true)
        })
        .catch(err => {
          console.error('复制失败: ', err)
          fallbackCopyTextToClipboard(textToCopy)
        })
    } else {
      console.warn(
        'fallback to legacy copy-text-to-clipboard method',
      )
      fallbackCopyTextToClipboard(textToCopy)
    }
  }

  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement('textarea')
    textArea.value = text

    textArea.style.top = '0'
    textArea.style.left = '0'
    textArea.style.position = 'fixed'

    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()

    try {
      const successful = document.execCommand('copy')
      const msg = successful
        ? '文本已复制到剪贴板！'
        : '复制失败'
      setNotificationMessage(msg)
      setNotificationType(successful ? 'success' : 'error')
      setShowNotification(true)
    } catch (err) {
      setNotificationMessage('复制失败')
      setNotificationType('error')
      setShowNotification(true)
    }

    document.body.removeChild(textArea)
  }

  return (
    <Fragment>
      <Button
        size="1"
        variant="outline"
        onClick={handleCopy}
      >
        <CopyIcon />
      </Button>
      {showNotification && (
        <Notification
          title={
            notificationType === 'success' ? '成功' : '错误'
          }
          message={notificationMessage}
          type={notificationType}
          timeout={2000}
        />
      )}
    </Fragment>
  )
}

export default CopyButton
