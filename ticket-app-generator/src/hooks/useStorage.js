import { useState, useEffect } from 'react'
export function useStorage(key = '') {
  const [storage, setStorage] = useState(() => {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : null
  })

  useEffect(() => {
    if (storage !== undefined) {
      localStorage.setItem(key, JSON.stringify(storage))
    }
  }, [storage, key])
  const clearStorage = () => {
    localStorage.removeItem(key)
    setStorage(null)
  }

  return { setStorage, clearStorage, storage }
}
