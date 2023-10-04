// import SHOP_DATA from '../../112 - shop-data.json'
import { CategoriesContext } from "../../contexts/categories.context"
import { useContext, useEffect } from "react"
import ProductCard from "../../components/product-card/product-card.component"
import './categories-preview.styles.scss'
import { Fragment } from "react"
import CategoryPreview from "../../components/category-preview/category-preview.component"
import { useSelector } from "react-redux"
import { selectCategoriesMap } from "../../store/categories/category.selector"
/**
 *  react automatically going to import the entire JSON file and 
 *  then store in this SHOP_DATA
 */
let CategoriesPreview = () => {
  let categoriesMapX = useSelector(selectCategoriesMap)
  return (
    <>
      {
        Object.keys(categoriesMapX).map(title => {
          let products = categoriesMapX[title]
          return (
            <CategoryPreview key={title} title={title} products={products} />
          )
        })
      }
    </>
  )
}
export default CategoriesPreview