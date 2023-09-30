import { createContext, useEffect, useState, useReducer } from "react"
import PRODUCTS from "../127 - shop-data"
import { addCollectionDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils"
export let CategoriesContext = createContext({
  categoriesMap: {},
  setProducts: () => null,
})
export let USER_ACTION_TYPES = {
  SET_CATEGORIES_MAP: 'SET_CATEGORIES_MAP'
}
let INITIAL_STATE = {
  categoriesMap: {}
}
let categoriesReducer = (currentState, action) => {
  let { type, payload } = action
  switch (type) {
    case USER_ACTION_TYPES.SET_CATEGORIES_MAP:
      return {
        ...currentState,
        categoriesMap: payload
      }
    default:
      throw new Error('Unhandled type')
      break;
  }
}
export let CategoriesProvider = ({ children }) => {
  // let [categoriesMap, setCategoriesMap] = useState({})
  let [state, dispatch] = useReducer(categoriesReducer, INITIAL_STATE)
  let { categoriesMap } = state
  let setCategoriesMap = (categoriesMap) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CATEGORIES_MAP, payload: categoriesMap })
  }
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