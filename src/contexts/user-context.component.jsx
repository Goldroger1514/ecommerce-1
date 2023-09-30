import { createContext, useState, useReducer } from "react"
import { createAction } from "../utils/reducer/reduer.utils"
export let UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})
export let USER_ACTION_TYPES = {
  'SET_CURRENT_USER': 'SET_CURRENT_USER'
}
let userReducer = (currentState, action) => {
  console.log('Dispatched')
  console.log(action)
  let { type, payload } = action
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...currentState,
        currentUser: payload
      }
      break;
    case 'increment':
      return {
        value: currentState.value + 1
      }
      break;
    default:
      throw new Error('Unkown action type ' + type)
      break;
  }
}
let INITIAL_STATE = {
  currentUser: null
}
export let UserProvider = ({ children }) => {
  let [state, dispatch] = useReducer(userReducer, INITIAL_STATE)//state object, dispatch function
  let { currentUser } = state
  let setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
  }
  let value = { currentUser, setCurrentUser }
  return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}
