// import './cart-icon.styles.scss'
// import { ReactComponent as ShoppingIcon } from '../../assets/115 - shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles'
let CartIcon = () => {
  let { isCartOpen, setIsCartOpen, cartItems, cartCount } = useContext(CartContext)
  let toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  let getTotalQuantity = () => {
    let total = 0
    for (let item of cartItems) {
      total += item.quantity
    }
    return total
  }
  let total = getTotalQuantity()
  return (
    <CartIconContainer onClick={(event) => toggleIsCartOpen()} >
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}
export default CartIcon