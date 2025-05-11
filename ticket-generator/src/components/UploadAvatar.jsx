import { useRef } from 'react'
import { FeedbackMessage } from './FeedbackMessage'
import { UploadIcon } from './Icons'
import { useTempUrl } from '../hooks/useTempUrl'
import './UploadAvatar.css'
export function UploadAvatar({ onChange, error, file, onRemove, name }) {
  const inputRef = useRef(null)
  const { url: previewUrl } = useTempUrl(file)
  const updateImage = () => inputRef.current.click()
  const handleRemove = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
    }
    onRemove()
  }

  const messageType = error ? 'error' : 'warning'
  const message = error
    ? error
    : 'Upload your photo (JPG or PNG, max size: 500KB).'
  return (
    <>
      <div className='upload-input'>
        <label className='uploadInput__label' htmlFor='avatar'>
          Upload Avatar
          <div className='uploadInput__drag-zone'>
            {previewUrl ? (
              <div className='drag-zone__avatar-preview'>
                <img
                  src={previewUrl}
                  alt='Avatar preview'
                  className='avatar-preview__image'
                />
                <div className='avatar-preview__actions'>
                  <button
                    type='button'
                    className='actions__remove'
                    onClick={handleRemove}
                  >
                    Remove image
                  </button>
                  <button
                    type='button'
                    className='actions__update'
                    onClick={updateImage}
                  >
                    Update image
                  </button>
                </div>
              </div>
            ) : (
              <div className='drag-zone__input'>
                <UploadIcon />
                <span>Drag and drop or click to upload</span>
              </div>
            )}
            <input
              ref={inputRef}
              type='file'
              accept='.png, .jpg, .jpeg'
              style={{ display: 'none' }}
              onChange={onChange}
              name={name}
              id='avatar'
            />
          </div>
        </label>

        <FeedbackMessage type={messageType} message={message} />
      </div>
    </>
  )
}
