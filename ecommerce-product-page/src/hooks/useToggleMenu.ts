import { useEffect, useState } from 'react'

export function useToggleMenu() {
  const [open, setOpen] = useState(false)
  const toggleMenu = () => setOpen((prev) => !prev)
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') setOpen(false)
  }
  useEffect(() => {
    if (open) {
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])
  return { open, toggleMenu }
}
