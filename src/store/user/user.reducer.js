import { USER_ACTION_TYPES } from "./user.types"
let INITIAL_STATE = {
  currentUser: null
}
export let userReducer = (currentState = INITIAL_STATE, action) => {
  console.log('Called')
  let { type, payload } = action
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...currentState,
        currentUser: payload
      }
      break;
    default:
      return currentState//by returning current state our code that this part of our reducer did not change
  }
}
/**
 * The first thing is that by default , because we no longer have the hook useReducer 
 * Previously we passed the initial state to useReducer so the reducer knew that the first state is going to be this initial state value
 * Because we don't have that hook anymore we need to give the state an inital value ourselves
 */
/**
 * The other thing that is different is that all of our reducers react to every single action as we mentioned before
 * The previous UserContext use useReducer and this useReducer returns you a dispatch
 * That dispatch when called , will only fire actions to the associated useReducer that we got this from
 * ------------------
 * This is where it's different because here every single reducer receives every single action inside of redux
 * So by default whenever we don't respond to an acion because it's very possible we might get actions where the type has nothing to do with our UserReducer
 */