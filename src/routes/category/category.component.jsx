import './category.styles.scss'
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../contexts/categories.context'
import { useContext, useState, useEffect } from 'react'
import ProductCard from '../../components/product-card/product-card.component'
let Category = () => {
  /**
   * useParams will allow us to actually get this value and the way it gives it to us is it actually as an object
   * So if there multiple parameters that match , then we'll get multiple 
   */
  let { category } = useParams()
  let { categoriesMap } = useContext(CategoriesContext)
  // let products=categoriesMap[category]
  let [products, setProducts] = useState([])
  console.log(products)
  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])
  return (
    <div className="category-container">
      {products &&
        products.map(product => {
          return <ProductCard key={product.id} props={product} />
        })
      }
    </div>
  )
}
export default Category
//Starting styled components