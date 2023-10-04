import { combineReducers } from "redux";//a method that allows us to create a final big reducer that we can use inside of our store by combining smaller reducers together
//it's something that looks like an object 
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
//this is the global state
export let rootReducer = combineReducers({
  //key:value
  //name of the reducer : the actual reducer function
  user: userReducer,
  categories: categoriesReducer
})