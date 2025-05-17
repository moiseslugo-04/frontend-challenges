import { useState, useEffect } from 'react'
export function useTempUrl({ file }) {
  const [url, setUrl] = useState(null)
  useEffect(() => {
    if (!(file instanceof Blob)) {
      setUrl(null)
      return
    }
    const objectUrl = URL.createObjectURL(file)
    setUrl(objectUrl)
    return () => {
      URL.revokeObjectURL(objectUrl)
    }
  }, [file])
  return { url }
}
