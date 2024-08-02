import { h, FunctionComponent, VNode } from 'preact'

import { Button } from '@radix-ui/themes'
import { CopyIcon } from '@radix-ui/react-icons'

interface CopyButtonProps {
  textToCopy: string
}

const LegacyCopyButton: FunctionComponent<
  CopyButtonProps
> = ({ textToCopy }): VNode => {
  const handleCopy = () => {
    if (
      navigator.clipboard &&
      navigator.clipboard.writeText
    ) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          alert('文本已复制到剪贴板')
        })
        .catch(err => {
          console.error(err)
          console.error(
            'fallback to legacy copy-text-to-clipboard method',
          )
          fallbackCopyTextToClipboard(textToCopy)
        })
    } else {
      console.error(
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
        ? '文本已复制到剪贴板'
        : '复制失败'
      alert(msg)
    } catch (err) {
      alert(`复制失败: , ${err}`)
    }

    document.body.removeChild(textArea)
  }

  return (
    <Button size="1" variant="outline" onClick={handleCopy}>
      <CopyIcon />
    </Button>
  )
}

export default LegacyCopyButton
