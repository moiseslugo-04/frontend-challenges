import styles from './AvatarPreview.module.css'
export function AvatarPreview({ imagePreview, onRemove, onChange }) {
  if (!imagePreview) return
  return (
    <div className={styles.avatarPreview}>
      <img src={imagePreview} alt='Avatar Preview' />
      <div className={styles.avatarPreview__options}>
        <button type='button' onClick={onRemove}>
          Remove Image{' '}
        </button>
        <button type='button' onClick={onChange}>
          Change Image
        </button>
      </div>
    </div>
  )
}
