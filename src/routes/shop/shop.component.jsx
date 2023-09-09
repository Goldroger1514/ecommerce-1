// import SHOP_DATA from '../../112 - shop-data.json'
import { CategoriesContext } from "../../contexts/categories.context"
import { useContext } from "react"
import ProductCard from "../../components/product-card/product-card.component"
import './shop.styles.scss'
import { Fragment } from "react"
/**
 *  react automatically going to import the entire JSON file and 
 *  then store in this SHOP_DATA
 */
let Shop = () => {
  let { categoriesMap } = useContext(CategoriesContext)
  return (
    <>
      {
        Object.keys(categoriesMap).map(title => {
          let products = categoriesMap[title]
          return (
            <Fragment key={title} >
              <h1>{title}</h1>
              <div className="products-container" >
                {
                  products.map(product => (
                    <ProductCard key={product.id} props={product} />
                  ))
                }
              </div>
            </Fragment>

          )
        })
      }
    </>
  )
}
export default Shop