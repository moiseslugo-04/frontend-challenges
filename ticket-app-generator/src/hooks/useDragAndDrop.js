import { useState, useCallback } from 'react'
export function useDragAndDrop(onDropCallback) {
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = useCallback((event) => {
    event.preventDefault()
    setIsDragging(true)
  }, [])
  const handleDragLeave = useCallback(() => setIsDragging(false), [])

  const handleDrop = useCallback(
    (event) => {
      event.preventDefault()
      setIsDragging(false)
      const files = Array.from(event.dataTransfer.files)
      onDropCallback(files)
    },
    [onDropCallback]
  )

  return {
    isDragging,
    eventHandlers: {
      onDragOver: handleDragOver,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop,
    },
  }
}
