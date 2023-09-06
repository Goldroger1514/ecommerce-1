import { createContext, useState } from "react"
import PRODUCTS from '../112 - shop-data.json'
export let ProductContext = createContext({
  products: [],
  setProducts: () => null
})
export let ProductProvider = ({ children }) => {
  let [products, setProducts] = useState(PRODUCTS)
  let value = { products }
  return <ProductContext.Provider value={value} >{children}</ProductContext.Provider>
}