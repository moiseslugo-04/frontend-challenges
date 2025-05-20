import { useEffect, useState } from 'react'
import avatar from './assets/images/image-avatar.png'
import product from './assets/images/image-product-1.jpg'
import { CartIcon, DeleteIcon, LogoIcon } from './components/Icons'
import { Menu } from './components/Menu/Menu'
import { ProductContent } from './components/ProductContent/ProductContent'
import { ProductGallery } from './components/ProductGallery/ProductGallery'
import './App.css'

function App() {
  const [productQuantity, setProductQuantity] = useState(() => {
    const storedQuantity = localStorage.getItem('productQuantity')
    return storedQuantity ? JSON.parse(storedQuantity) : 0
  })

  useEffect(() => {
    localStorage.setItem('productQuantity', JSON.stringify(productQuantity))
    const storedQuantity = localStorage.getItem('productQuantity')
    if (storedQuantity) {
      setProductQuantity(JSON.parse(storedQuantity))
    }
  }, [productQuantity])

  const clearCart = () => setProductQuantity(0)
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => setIsOpen((prev) => !prev)
  const handleQuantity = (action: 'increment' | 'decrement' | null) => {
    if (action === 'increment') {
      setProductQuantity((prev: number) => prev + 1)
    } else if (action === 'decrement') {
      setProductQuantity((prev: number) => (prev > 0 ? prev - 1 : 0))
    }
  }
  const totalPrice = 125 * productQuantity
  const formattedPrice = totalPrice.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  const formattedTotalPrice = totalPrice
    ? formattedPrice.replace(/\$|,/g, '')
    : '0.00'
  return (
    <div className='app'>
      <header className='header'>
        {isOpen && (
          <div className='product-cart'>
            <span className='product-cart__header'>Cart</span>
            <div className='product-cart__content'>
              {productQuantity >= 1 ? (
                <>
                  <div className='product-cart__image'>
                    <img src={product} alt='Image product' width={'50px'} />
                  </div>
                  <div className='product-cart__details'>
                    <div className='product-cart__details__title'>
                      Fall Limited Edition Sneakers
                    </div>
                    <div className='product-cart__details__price'>
                      $125.00 x {productQuantity}{' '}
                      <span>${formattedTotalPrice}</span>
                    </div>
                  </div>
                  <button
                    className='product-cart__details__remove'
                    onClick={clearCart}
                  >
                    <DeleteIcon />
                  </button>
                </>
              ) : (
                <span className='textEmpty'>Your cart is Empty</span>
              )}
            </div>
            {productQuantity >= 1 && (
              <button className='product-cart__btn-checkout '>Checkout</button>
            )}
          </div>
        )}
        <div className='header__start'>
          <Menu />
          <LogoIcon />
        </div>
        <div className='header__end'>
          {productQuantity >= 1 && (
            <span className='header__quantity'>{productQuantity} </span>
          )}
          <button onClick={handleToggle} className='header__btn-cart'>
            <CartIcon />
          </button>

          <div className='header__avatar'>
            <img src={avatar} alt='User avatar' />
          </div>
        </div>
      </header>
      <main className='main'>
        <ProductGallery />
        <ProductContent
          quantity={productQuantity}
          updateQuantity={handleQuantity}
        />
      </main>
    </div>
  )
}
export default App
