// import SHOP_DATA from '../../112 - shop-data.json'
import { CategoriesContext } from "../../contexts/categories.context"
import { useContext } from "react"
import ProductCard from "../../components/product-card/product-card.component"
import './categories-preview.styles.scss'
import { Fragment } from "react"
import CategoryPreview from "../../components/category-preview/category-preview.component"
/**
 *  react automatically going to import the entire JSON file and 
 *  then store in this SHOP_DATA
 */
let CategoriesPreview = () => {
  let { categoriesMap } = useContext(CategoriesContext)
  return (
    <>
      {
        Object.keys(categoriesMap).map(title => {
          let products = categoriesMap[title]
          return (
            <CategoryPreview key={title} title={title} products={products} />
          )
        })
      }
    </>
  )
}
export default CategoriesPreview