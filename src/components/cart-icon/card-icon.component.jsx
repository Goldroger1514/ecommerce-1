import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/115 - shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
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
    <div onClick={(event) => toggleIsCartOpen()} className='cart-icon-container' >
      <ShoppingIcon className='shopping-icon' />
      <span className="item-count">{cartCount}</span>
    </div>
  )
}
export default CartIcon