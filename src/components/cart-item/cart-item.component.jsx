import './cart-item.styles.scss'
let CartItem = ({ cartItem }) => {
  let { name, quantity, imageUrl, price } = cartItem
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt="" />
      <div className="item-details">
        <span>{name}</span>
        <span className='price' >{quantity}x${price}</span>
      </div>
    </div>
  )
}
export default CartItem