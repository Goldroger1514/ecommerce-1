import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/115 - shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
let CartIcon = () => {
  let { isCartOpen, setIsCartOpen } = useContext(CartContext)
  let toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  return (
    <div onClick={(event) => toggleIsCartOpen()} className='cart-icon-container' >
      <ShoppingIcon className='shopping-icon' />
      <span className="item-count">10</span>
    </div>
  )
}
export default CartIcon