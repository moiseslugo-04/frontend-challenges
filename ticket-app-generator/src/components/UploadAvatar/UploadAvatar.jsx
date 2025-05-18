import { useRef, useCallback } from 'react'
import { AvatarPreview } from '../AvatarPreview/AvatarPreview'
import { UploadIcon } from '../Icons'
import styles from './UploadAvatar.module.css'
import { useTempUrl } from '../../hooks/useTempUrl'
import { useDragAndDrop } from '../../hooks/useDragAndDrop'
export function UploadAvatar({ onChange, onRemove, avatar }) {
  const { url } = useTempUrl({ file: avatar })
  const { files, isDragging, eventHandlers } = useDragAndDrop(handleDrop)

  const handleDrop = useCallback(
    ([file]) => {
      if (!file) return
      onChange({ target: { name: 'avatar', files: [file] } })
    },
    [onChange]
  )
  const inputRef = useRef()
  const resetInputFile = () => {
    if (inputRef.current) inputRef.current.value = null
  }
  const openFilePicker = () => {
    resetInputFile()
    inputRef.current?.click()
  }
  const handleClick = () => {
    if (url) return
    openFilePicker()
  }
  const handleRemove = () => {
    onRemove()
    resetInputFile()
  }
  const handleUpdate = () => openFilePicker()
  const onKeyDown = (event) => (event.key == 'Enter' ? handleClick() : '')

  return (
    <div className={styles.uploadAvatar}>
      <label htmlFor='avatar'>Upload Avatar</label>
      <div
        {...eventHandlers}
        className={`${styles.dragZone} ${isDragging ? styles.isDrag : ''}`}
        onClick={handleClick}
        role='button'
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <figure>
          {url ? (
            <AvatarPreview
              imagePreview={url}
              onChange={handleUpdate}
              onRemove={handleRemove}
            />
          ) : (
            <div className={styles.dragZone__upload}>
              <UploadIcon />
              <span>Drag and drop or click to upload</span>
            </div>
          )}
        </figure>
      </div>
      <input
        id='avatar'
        type='file'
        ref={inputRef}
        onChange={onChange}
        name='avatar'
        accept='image/*'
        style={{ display: 'none' }}
      />
    </div>
  )
}
