import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'
import CheckoutItem from '../../components/cart-item/checkout-cart-item.component'
import './checkout.styles.scss'

let Checkout = () => {
  let { cartItems, total } = useContext(CartContext)
  return (
    <div className='checkout-container' >
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.length > 0 ? cartItems.map((item) => (<CheckoutItem key={item.id} cartItem={item} />)) : <></>
      }
      <span className="total">Total:{total}$</span>
    </div>
  )
}
export default Checkout