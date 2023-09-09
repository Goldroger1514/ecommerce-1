import { createContext, useEffect, useState } from "react"
import PRODUCTS from "../127 - shop-data"
import { addCollectionDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils"
export let CategoriesContext = createContext({
  categoriesMap: {},
  setProducts: () => null,
})
export let CategoriesProvider = ({ children }) => {
  let [categoriesMap, setCategoriesMap] = useState({})
  useEffect(() => {
    let getCategoriesMap = async () => {
      let categoryMap = await getCategoriesAndDocuments()
      setCategoriesMap(categoryMap)
    }
    getCategoriesMap()
  }, [])
  let value = { categoriesMap }
  return <CategoriesContext.Provider value={value} >{children}</CategoriesContext.Provider>
};