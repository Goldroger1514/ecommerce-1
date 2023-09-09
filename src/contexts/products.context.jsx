import { createContext, useState } from "react"
import PRODUCTS from "../127 - shop-data"
export let ProductContext = createContext({
  products: [],
  setProducts: () => null,
})
export let ProductProvider = ({ children }) => {
  let [products, setProducts] = useState([])
  let value = { products }
  return <ProductContext.Provider value={value} >{children}</ProductContext.Provider>
}