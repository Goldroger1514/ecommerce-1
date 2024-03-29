import './cart-dropdown.styles.jsx'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { useNavigate } from 'react-router-dom'
import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles.jsx'
let CartDropdown = () => {
  let navigate = useNavigate()
  let { cartItems } = useContext(CartContext)
  return (
    <CartDropdownContainer>
      <CartItems >
        {
          cartItems.length ? cartItems.map(item => <CartItem key={item.id} cartItem={item} />) : <EmptyMessage>Your card is empty</EmptyMessage>
        }
      </CartItems>
      <Button clickHandler={() => {
        navigate('/Checkout')
      }}>Go To Checkout</Button>
    </CartDropdownContainer>
  )
}
export default CartDropdown