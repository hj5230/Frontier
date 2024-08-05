import { h, FunctionComponent, VNode } from 'preact'
import { useState, useEffect } from 'preact/hooks'

import { Button, Text } from '@radix-ui/themes'
import { CopyIcon } from '@radix-ui/react-icons'

interface CopyButtonProps {
  textToCopy: string
}

const LegacyCopyButton: FunctionComponent<
  CopyButtonProps
> = ({ textToCopy }): VNode => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    if (
      navigator.clipboard &&
      navigator.clipboard.writeText
    ) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          setIsCopied(true)
        })
        .catch(err => {
          console.error(
            `[COPY-LEGACY] Caught error when trying to write text: ${err}`,
          )
          console.warn(
            '[COPY-LEGACY] Fallback to legacy copy method',
          )
          fallbackCopyTextToClipboard(textToCopy)
        })
    } else {
      console.warn(
        '[COPY-LEGACY] Fallback to legacy copy method',
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
      const success = document.execCommand('copy')
      if (!success)
        console.error(
          '[COPY-LEGACY-FALLBACK] Failed to execute copy',
        )
      setIsCopied(true)
    } catch (err) {
      console.error(
        `[COPY-LEGACY-FALLBACK] Caught error when trying to execute copy: , ${err}`,
      )
    }

    document.body.removeChild(textArea)
  }

  useEffect(() => {
    let timer: number | undefined
    if (isCopied) {
      timer = window.setTimeout(() => {
        setIsCopied(false)
      }, 1000)
    }

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [isCopied])

  return (
    <Button size="1" variant="outline" onClick={handleCopy}>
      {isCopied ? <Text>Copied</Text> : <CopyIcon />}
    </Button>
  )
}

export default LegacyCopyButton
