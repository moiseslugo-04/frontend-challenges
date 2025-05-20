import { ImageCarousel } from '../ImageCarousel/ImageCarousel'
import { useState } from 'react'
import Lightbox from '../Lightbox/Lightbox'
import styles from './ProductGallery.module.css'
export function ProductGallery() {
  const [openLightBox, setOpenLightBox] = useState(false)
  const handleOpenLightBox = () => {
    setOpenLightBox(true)
  }
  const handleCloseLightBox = () => {
    setOpenLightBox(false)
  }

  return (
    <div className={styles.productGallery}>
      <ImageCarousel onClick={handleOpenLightBox} />
      <Lightbox open={openLightBox} onClick={handleCloseLightBox} />
    </div>
  )
}
