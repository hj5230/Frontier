import {
  h,
  FunctionComponent,
  VNode,
  Fragment,
} from 'preact'
import { useEffect, useState } from 'preact/hooks'

interface TypeWriterProps {
  text: string
  speed?: number
}

const Typewriter: FunctionComponent<TypeWriterProps> = ({
  text,
  speed = 20,
}): VNode => {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[index])
        setIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timer)
    }
  }, [index, text, speed])

  return <Fragment>{displayedText}</Fragment>
}

export default Typewriter
