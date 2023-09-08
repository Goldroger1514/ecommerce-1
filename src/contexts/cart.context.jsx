import { createContext, useState, useEffect } from "react";
let addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains product to add
  let exists = cartItems.find(item => item.id == productToAdd.id)
  //if found increment quantity
  if (exists) {
    return cartItems.map(item => item.id == productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item)
    let newArr = []
    for (let item of cartItems)
      if (item.id == productToAdd.id) {
        newArr.push({ ...item, quantity: item.quantity + 1 })
      } else {
        newArr.push({ ...item })
      }
    return newArr
  }
  //return new array with modified cartItems
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}
let incDec = (cartItems, product, op) => {
  if (op == '+') {
    return cartItems.map(item => item.id == product.id ? { ...item, quantity: item.quantity + 1 } : item)
  } else if (op == '-' && product.quantity > 0) {
    if (product.quantity - 1 == 0)
      return remove(cartItems, product)
    return cartItems.map(item => item.id == product.id ? { ...item, quantity: item.quantity - 1 } : item)
  }
}
export let CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => { },
  cartCount: 0,
  removeItem: () => { },
  increaseDecrease: () => { },
  total: 0
})
/**
 * Product
 * {
 * id,name,price,imageUrl
 * }
 * CartItem
 * {
 * id,name,price,imageUrl,quantity
 * }
 */
let remove = (cartItems, product) => {
  let index = 0;
  for (let item of cartItems)
    if (item.id == product.id)
      break;
    else
      index++
  cartItems.splice(index, 1)
  return cartItems
}
export let CartProvider = ({ children }) => {
  let [isCartOpen, setIsCartOpen] = useState(false)
  let [cartItems, setCartItems] = useState([])
  let [cartCount, setCartCount] = useState(0)
  let [total, setTotal] = useState(0)
  let addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }
  let increaseDecrease = (product, op) => {
    setCartItems([...incDec(cartItems, product, op)])
  }
  let removeItem = (product) => {
    setCartItems([...remove(cartItems, product)])
  }
  let calculateTotal = (cartItems) => {
    let total = 0
    for (let item of cartItems)
      total += item.quantity * item.price
    setTotal(total)
  }
  useEffect(() => {
    let newCount = cartItems.reduce((acc, element) => {
      return acc + element.quantity
    }, 0)
    setCartCount(newCount)
  }, [cartItems])
  useEffect(() => {
    calculateTotal(cartItems);
  }, [cartItems])
  let value = { isCartOpen, total, increaseDecrease, setIsCartOpen, removeItem, addItemToCart, cartItems, cartCount }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}