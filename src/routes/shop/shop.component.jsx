// import SHOP_DATA from '../../112 - shop-data.json'
import { ProductContext } from "../../contexts/products.context"
import { useContext } from "react"
import ProductCard from "../../components/product-card/product-card.component"
import './shop.styles.scss'
/**
 *  react automatically going to import the entire JSON file and 
 *  then store in this SHOP_DATA
 */
let Shop = () => {
  let { products } = useContext(ProductContext)
  return (
    <div className="products-container" >
      {products.map(product => (
        <ProductCard key={product.id} props={product} />
      ))}
    </div>
  )
}
export default Shop