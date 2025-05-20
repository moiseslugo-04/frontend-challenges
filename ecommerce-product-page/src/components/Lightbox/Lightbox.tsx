import { CloseIcon } from '../Icons'
import { ImageCarousel } from '../ImageCarousel/ImageCarousel'
import styles from './Lightbox.module.css'
export default function Lightbox({
  open,
  onClick,
}: {
  open: boolean
  onClick: () => void
}) {
  if (!open) return null
  return (
    <div className={styles.lightbox__container}>
      <div className={styles.lightbox}>
        <button
          className={styles.lightbox__close}
          type='button'
          onClick={onClick}
        >
          <CloseIcon />
        </button>
        <ImageCarousel />
      </div>
    </div>
  )
}
