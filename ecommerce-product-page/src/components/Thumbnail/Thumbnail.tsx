import styles from './Thumbnail.module.css'
interface ThumbnailsProps {
  id: number
  src: string
  setCurrentImage: (id: number) => void
  isSelect: boolean
}
export function Thumbnails({
  id,
  src,
  setCurrentImage,
  isSelect,
}: ThumbnailsProps) {
  return (
    <div
      aria-selected={isSelect}
      key={id}
      onClick={() => setCurrentImage(id)}
      className={styles.thumbnail}
    >
      <img src={src} alt='Product' />
    </div>
  )
}
