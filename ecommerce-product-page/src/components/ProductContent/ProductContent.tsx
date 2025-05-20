import type React from 'react'
import { CartIcon, MinusIcon, PlusIcon } from '../Icons'
import styles from './ProductContent.module.css'
interface ProductContentProps {
  quantity: number
  updateQuantity: (action: 'increment' | 'decrement' | null) => void
}
export function ProductContent({
  quantity,
  updateQuantity,
}: ProductContentProps) {
  const handleQuantity = (event: React.MouseEvent<HTMLButtonElement>) => {
    const action = event.currentTarget.getAttribute('data-testid')
    console.log(action)

    if (action === 'increment' || action === 'decrement') {
      updateQuantity(action)
    }
  }
  return (
    <section className={styles.productContent}>
      <span className={styles.productContent__subTitle}> Sneaker Company</span>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className={styles.productContent__price}>
        <p>
          $125.00
          <span className={styles.productContent__price_discount}>50%</span>
        </p>
        <p>
          <span className={styles.productContent__price_old}>$250.00</span>
        </p>
      </div>

      <div className={styles.productContent__actions}>
        <div className={styles.productContent__actions_quantity}>
          <button
            aria-label='Decrease quantity'
            type='button'
            data-testid='decrement'
            onClick={handleQuantity}
            className={styles.productContent__actions_quantity_minus}
          >
            <MinusIcon />
          </button>
          <span>{quantity}</span>
          <button
            aria-label='Increase quantity'
            type='button'
            data-testid='increment'
            onClick={handleQuantity}
            className={styles.productContent__actions_quantity_plus}
          >
            <PlusIcon />
          </button>
        </div>
        <button
          type='button'
          className={styles.productContent__actions_addToCart}
        >
          <CartIcon /> Add to cart
        </button>
      </div>
    </section>
  )
}
