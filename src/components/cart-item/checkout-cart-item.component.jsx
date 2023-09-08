import './checkout-cart-item.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
let CheckoutItem = ({ cartItem }) => {
  let { name, quantity, imageUrl, price } = cartItem
  let { increaseDecrease, removeItem } = useContext(CartContext)
  return (
    <div className='checkout-item-container'>
      <div className='image-container' ><img src={imageUrl} alt={name} /></div>
      <span className='name' >{name}</span>
      <span className='quantity' ><button onClick={() => {
        increaseDecrease(cartItem, '-')
      }} className="decrease">&lt;</button> {quantity} <button onClick={() => {
        increaseDecrease(cartItem, '+')
      }} className="increase">&gt;</button> </span>
      <span className='price' >{price}</span>
      <div className='remove-button'><button onClick={() => {
        removeItem(cartItem)
      }} className="remove">&#10005;</button></div>
    </div>
  )
}
export default CheckoutItem