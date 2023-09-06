import './product-card.styles.scss'
import Button from '../button/button.component'
let ProductCard = ({ props }) => {
  let { name, price, imageUrl } = props
  return (
    <div className='product-card-container' >
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType='inverted' >Add To Card</Button>
    </div>
  )
}
export default ProductCard