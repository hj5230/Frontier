import { useState, useEffect } from 'preact/hooks'

export function useWidth(): number {
  if (typeof window === 'undefined') return 0

  const [windowSize, setWindowSize] = useState<number>(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }

    if (typeof ResizeObserver !== 'undefined') {
      const resizeObserver = new ResizeObserver(
        handleResize,
      )
      resizeObserver.observe(document.body)
      return () => resizeObserver.disconnect()
    } else {
      window.addEventListener('resize', handleResize)
      return () =>
        window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}
