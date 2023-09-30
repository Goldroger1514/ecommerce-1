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
  /**
 * In this function, currentState is the current state of your user-related context data, which is provided 
 * by the useReducer hook when you call it with the userReducer function.
 *  The useReducer hook manages the state and passes the current state as the first argument to your reducer function 
 * (userReducer in this case) whenever an action is dispatched.
 */
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
  /**
   * Initially, when you create the state using useReducer:
    let [state, dispathFunction] = useReducer(userReducer, INITIAL_STATE)
    state is initialized with the INITIAL_STATE object. This is the initial state of your context.
   */
}
export let UserProvider = ({ children }) => {
  // let [currentUser, setCurrentUser] = useState(null)
  let [state, dispatch] = useReducer(userReducer, INITIAL_STATE)//state object, dispatch function
  let { currentUser } = state
  let setCurrentUser = (user) => {
    // dispathFunction({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user })
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
    /**
     * When you dispatch an action using dispathFunction:
     * dispathFunction({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user })
     * The useReducer hook takes the current state (state), passes it to your userReducer function as currentState,
     *  along with the action you dispatched ({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user }),
     *  and then calls your reducer function (userReducer) with these arguments.
     */
  }
  /**
   * dispatch function whenever you call it , you pass it an action object
   * So if we want this useReducer to receive an action , we call dispatch and dispatch will take that action and then pass it in to userReducer
   */
  console.log(currentUser)
  let value = { currentUser, setCurrentUser }
  return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}
/**
 * Reducers as code are very simple , they're pretty much a function that returns an object
 * let userReducer=(currentState,action)=>{
 * return{
 *  currentUser:null
 * }
 * }
 * - Reducers change the object that we get back and the properties and the values inside them based on the action
 */
/**
 * 
 */