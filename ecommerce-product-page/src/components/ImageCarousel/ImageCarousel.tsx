import { useState } from 'react'
import product1 from '../../assets/images/image-product-1.jpg'
import product2 from '../../assets/images/image-product-2.jpg'
import product3 from '../../assets/images/image-product-3.jpg'
import product4 from '../../assets/images/image-product-4.jpg'
import styles from './ImageCarousel.module.css'
import { PreviousIcon, NextIcon } from '../Icons'
import { Thumbnails } from '../Thumbnail/Thumbnail'

export function ImageCarousel({ onClick }: { onClick?: () => void }) {
  const [currentImage, setCurrentImage] = useState(0)
  const handleNextImage = () => {
    if (currentImage === 3) return
    setCurrentImage((prev) => prev + 1)
  }
  const handlePreviousImage = () => {
    if (currentImage === 0) return
    setCurrentImage((prev) => prev - 1)
  }
  //DRY the images array
  const images = [product1, product2, product3, product4].map((src, index) => ({
    id: index,
    src,
  }))
  return (
    <div className={styles.ImageCarousel__container}>
      <div
        role='region'
        aria-label='Gallery viewer'
        aria-live='polite'
        className={styles.ImageCarousel}
      >
        <button
          data-testid='previous'
          aria-label='Go to previous image'
          type='button'
          className={styles.btn__previous}
          onClick={handlePreviousImage}
          disabled={currentImage === 0}
        >
          <PreviousIcon />
        </button>
        <button
          data-testid='next'
          aria-label='Go to next image'
          className={styles.btn__next}
          type='button'
          onClick={handleNextImage}
          disabled={currentImage === 3}
        >
          <NextIcon />
        </button>
        <img
          src={images[currentImage].src}
          data-testid='product-image'
          alt='Product'
          className={styles.ImageCarousel__image}
          onClick={onClick}
        />
      </div>
      <div className={styles.ImageCarousel__thumbnails}>
        {images.map(({ id, src }) => (
          <Thumbnails
            id={id}
            src={src}
            setCurrentImage={setCurrentImage}
            isSelect={currentImage === id}
          />
        ))}
      </div>
    </div>
  )
}
