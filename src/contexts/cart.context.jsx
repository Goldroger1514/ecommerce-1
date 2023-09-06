import { createContext, useState } from "react";
export let CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null
})
export let CartProvider = ({ children }) => {
  let [isCartOpen, setIsCartOpen] = useState(false)
  let value = { isCartOpen, setIsCartOpen }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}