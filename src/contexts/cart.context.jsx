import { createContext, useState, useEffect, useReducer } from "react";
import { createAction } from "../utils/reducer/reduer.utils";
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
let USER_ACTION_TYPES = {
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  // SET_CART_COUNT: 'SET_CART_COUNT',
  // SET_CART_TOTAL: 'SET_CART_TOTAL'
}
let INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  total: 0
  /**
   * Our reducer only store readable values
   * The best way to think about our final output is with the INITIAL_STATE object and it's gonna include all the readable value of the context
   * The INITIAL_STATE object gives us the object that we need to keep track of when it comes to what our actual reducer should return
   */
}
//Shape of the final output , include all the readable value of our context
let cartReducer = (currentState, action) => {
  let { type, payload } = action
  /**
   * Once we have the type and ppayload , now we can determine with these two values from the action what do we need to return as the UPDATED_STATE
  */
  // let newCartItems=addCartItem(currentState.cartItems,payload)
  // let newCartTotal=newCartItems.reduce()

  switch (type) {
    // case USER_ACTION_TYPES.SET_CART_ITEMS:
    //   return {
    //     ...currentState,
    //     cartItems:addCartItem(currentState.cartItems,payload),
    //     cartCount:currentState.cartCount+1,
    //     cartTotal:1
    //   }
    //   break;
    /**
     * All a reducer should care about is just updating the state, it shouldn't worry about anything regarding how to update that state 
     */
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
/**
 * Our reducer should not handle any business logic, meaning that inside of a reducer
 * if we were to receive some item, some of we might be thinking 
 * Let's just create actions
 * for example:
 */
// let addToCartAction = (itemToAdd) => {
//   dispatch({ type: "ADD_TO_CART", payload: itemToAdd })
// }
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
  // let [isCartOpen, setIsCartOpen] = useState(false)
  // let [cartItems, setCartItems] = useState([])
  // let [cartCount, setCartCount] = useState(0)
  // let [total, setTotal] = useState(0)
  let [state, dispatchFunction] = useReducer(cartReducer, INITIAL_STATE)
  let { cartItems, cartCount, total, isCartOpen } = state
  let updateCartReducer = (newCartItems) => {
    let total = 0
    for (let item of newCartItems)
      total += item.quantity * item.price
    let newCount = cartItems.reduce((acc, element) => {
      return acc + element.quantity
    }, 0)
    // dispatchFunction({ type: USER_ACTION_TYPES.SET_CART_ITEMS, payload: { cartItems: newCartItems, cartCount: newCount, total: total } })
    dispatchFunction(createAction(USER_ACTION_TYPES.SET_CART_ITEMS, { cartItems: newCartItems, cartCount: newCount, total: total }))
    /**
     * generate newCartTotal
     * 
     * generate newCartCount
     * 
     * dispatch new action with payload that looks like {
     * newCartItems,
     * newCartTotal,
     * newCartCount
     * }
     */
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
  // let calculateTotal = (cartItems) => {
  //   let total = 0
  //   for (let item of cartItems)
  //     total += item.quantity * item.price
  //   setTotal(total)
  // }
  // useEffect(() => {
  //   let newCount = cartItems.reduce((acc, element) => {
  //     return acc + element.quantity
  //   }, 0)
  //   setCartCount(newCount)
  // }, [cartItems])
  // useEffect(() => {
  //   calculateTotal(cartItems)
  // }, [cartItems])
  let value = { isCartOpen, total, increaseDecrease, setIsCartOpen, removeItem, addItemToCart, cartItems, cartCount }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
/**
 * the good time to use reducer is when one update needs to modify multiple readable values inside of our state 
 */