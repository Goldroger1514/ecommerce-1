import { createContext, useState, useEffect, useReducer } from "react";
import { createAction } from "../utils/reducer/reduer.utils";
let addCartItem = (cartItems, productToAdd) => {
  let exists = cartItems.find(item => item.id == productToAdd.id)
  if (exists) {
    return cartItems.map(item => item.id == productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item)
  }
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
let USER_ACTION_TYPES = {
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
  SET_CART_ITEMS: 'SET_CART_ITEMS',
}
let INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  total: 0
}
let cartReducer = (currentState, action) => {
  let { type, payload } = action
  switch (type) {
    case USER_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...currentState,
        ...payload
      }
      break
    case USER_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...currentState,
        isCartOpen: !payload
      }
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`)
      break
  }
}
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
  let [state, dispatchFunction] = useReducer(cartReducer, INITIAL_STATE)
  let { cartItems, cartCount, total, isCartOpen } = state
  let updateCartReducer = (newCartItems) => {
    let total = 0
    for (let item of newCartItems)
      total += item.quantity * item.price
    let newCount = cartItems.reduce((acc, element) => {
      return acc + element.quantity
    }, 0)
    dispatchFunction(createAction(USER_ACTION_TYPES.SET_CART_ITEMS, { cartItems: newCartItems, cartCount: newCount, total: total }))
  }
  let setIsCartOpen = () => {
    dispatchFunction({ type: USER_ACTION_TYPES.SET_IS_CART_OPEN, payload: isCartOpen })
  }
  let addItemToCart = (productToAdd) => {
    let newCartItems = addCartItem(cartItems, productToAdd)
    updateCartReducer(newCartItems)
  }
  let increaseDecrease = (product, op) => {
    let newCartItems = [...incDec(cartItems, product, op)]
    updateCartReducer(newCartItems)
  }
  let removeItem = (product) => {
    let newCartItems = [...remove(cartItems, product)]
    updateCartReducer(newCartItems)
  }
  let value = { isCartOpen, total, increaseDecrease, setIsCartOpen, removeItem, addItemToCart, cartItems, cartCount }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}