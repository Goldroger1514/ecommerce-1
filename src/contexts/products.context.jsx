import { createContext, useEffect, useState } from "react"
import PRODUCTS from "../127 - shop-data"
import { addCollectionDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils"
export let ProductContext = createContext({
  products: [],
  setProducts: () => null,
})
export let ProductProvider = ({ children }) => {
  let [products, setProducts] = useState([])
  useEffect(() => {
    let getCategoriesMap = async () => {
      let categoryMap = await getCategoriesAndDocuments()
      console.log(categoryMap)
    }
    getCategoriesMap()
  }, [])
  let value = { products }
  return <ProductContext.Provider value={value} >{children}</ProductContext.Provider>
};