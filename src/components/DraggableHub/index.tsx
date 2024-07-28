import { h, VNode } from 'preact'
import { useRef, useEffect } from 'preact/hooks'
import { Box, Button, Flex } from '@radix-ui/themes'

const DraggableHub: React.FC = (): VNode => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const dragHandleRef = useRef<HTMLDivElement>(null)
  const offsetXRef = useRef(0)
  const offsetYRef = useRef(0)

  const onMouseDown = (e: MouseEvent): void => {
    const wrapper = wrapperRef.current
    if (wrapper) {
      offsetXRef.current =
        e.clientX - wrapper.getBoundingClientRect().left
      offsetYRef.current =
        e.clientY - wrapper.getBoundingClientRect().top
      wrapper.style.transition = 'none'
      wrapper.style.cursor = 'grabbing'
      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', onMouseUp)
      e.preventDefault()
    }
  }

  const onMouseMove = (e: MouseEvent): void => {
    const wrapper = wrapperRef.current
    if (wrapper) {
      const parent = wrapper.parentElement
      if (parent) {
        const parentRect = parent.getBoundingClientRect()
        const wrapperRect = wrapper.getBoundingClientRect()

        let newLeft = e.clientX - offsetXRef.current
        let newTop = e.clientY - offsetYRef.current

        const minLeft = 0
        const maxLeft = parentRect.width - wrapperRect.width
        const minTop = 0
        const maxTop =
          parentRect.height - wrapperRect.height

        newLeft = Math.max(
          minLeft,
          Math.min(newLeft, maxLeft),
        )
        newTop = Math.max(minTop, Math.min(newTop, maxTop))

        wrapper.style.left = `${newLeft}px`
        wrapper.style.top = `${newTop}px`
      }
    }
  }

  const onMouseUp = (): void => {
    const wrapper = wrapperRef.current
    if (wrapper) {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
      wrapper.style.cursor = 'grab'
      wrapper.style.transition = 'all 0.2s ease-out'
    }
  }

  useEffect(() => {
    const dragHandle = dragHandleRef.current
    if (dragHandle) {
      dragHandle.addEventListener('mousedown', onMouseDown)
    }

    return () => {
      if (dragHandle) {
        dragHandle.removeEventListener(
          'mousedown',
          onMouseDown,
        )
      }
    }
  }, [])

  return (
    <Box
      ref={wrapperRef}
      style={{
        position: 'absolute',
        cursor: 'grab',
        backgroundColor: 'var(--gray-3)',
        borderRadius: '8px',
        padding: '8px 12px',
        boxShadow:
          '0 6px 24px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.2s ease-out',
        userSelect: 'none',
        zIndex: 1000,
      }}
    >
      <Flex align="center" gap="3">
        <div
          ref={dragHandleRef}
          style={{
            cursor: 'grab',
            fontSize: '24px',
            lineHeight: 1,
            color: 'var(--gray-9)',
            marginRight: '4px',
          }}
        >
          ⋮⋮⋮
        </div>
        <Button size="3">BR</Button>
      </Flex>
    </Box>
  )
}

export default DraggableHub
