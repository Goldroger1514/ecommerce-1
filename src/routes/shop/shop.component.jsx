// import SHOP_DATA from '../../112 - shop-data.json'
import './shop.styles.scss'
import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'
import { useEffect } from 'react'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { setCategoriesMap } from '../../store/categories/category.action'
import { useDispatch } from 'react-redux'
/**
 *  react automatically going to import the entire JSON file and 
 *  then store in this SHOP_DATA
 */
let Shop = () => {
  let dispatch = useDispatch()
  useEffect(() => {
    let getCategoriesMap = async () => {
      let categoryMap = await getCategoriesAndDocuments()
      dispatch(setCategoriesMap(categoryMap))
    }
    getCategoriesMap()
  }, [])
  return (
    <Routes>
      <Route index={true} element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
      {
        /**
         * This string means that you can access it from a component and you say : and name of variable 
         */
      }
    </Routes>
  )
}
export default Shop