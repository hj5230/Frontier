import { h, FunctionComponent, VNode } from 'preact'
import { useRef, useEffect } from 'preact/hooks'

import { Position } from '@typings/position'

import { Box, Flex } from '@radix-ui/themes'

// import { DragHandleDots2Icon } from '@radix-ui/react-icons'

interface DraggableProps {
  items: VNode
  initialPosition?: Position
}

const Draggable: FunctionComponent<DraggableProps> = ({
  items,
  initialPosition = { x: '45%', y: '5px' },
}): VNode => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const dragHandleRef = useRef<HTMLDivElement>(null)
  const offsetXRef = useRef(0)
  const offsetYRef = useRef(0)

  function onMouseDown(e: MouseEvent): void {
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

  function onMouseMove(e: MouseEvent): void {
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

  function onMouseUp(): void {
    const wrapper = wrapperRef.current
    if (wrapper) {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
      wrapper.style.cursor = 'grab'
      wrapper.style.transition = 'all 0.2s ease-out'
    }
  }

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (wrapper) {
      wrapper.style.left = `${initialPosition.x}px`
      wrapper.style.top = `${initialPosition.y}px`
    }

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
  }, [initialPosition])

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
        zIndex: 1,
        left: initialPosition.x,
        top: initialPosition.y,
      }}
    >
      <Flex align="center" gap="2">
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
          ⋮⋮
          {/* <DragHandleDots2Icon width="24" height="24" /> */}
        </div>
        {items}
      </Flex>
    </Box>
  )
}

export default Draggable
