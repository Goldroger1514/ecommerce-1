import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// root-reducer
import { rootReducer } from "./root-reducer";
let middlewares = [logger]
let composedEnhancers = compose(applyMiddleware(...middlewares))
/**
 * compose is a way for us to pass multiple functions left to right
 */
export let store = createStore(rootReducer, undefined, composedEnhancers)
/**
 * This store is just in order to facilitate the movement and passing of actions through these reducers 
 * All a store really needs is just the rootReducer in order to be created
 * -
 * The logger is essentially something that allows us to see
 * what the state looks like before an action is dispatched
 * what the actions is 
 * and how the state in turn looks after the action is dispatched 
 * --
 * in order to do this we need to create a middleware
 * they are kind of like little library helpers that run before an action hits the reducer
 * Whenever we dispatch an action , before that action hits the reducer , it hits the middleware first 
 * --
 * in order for our middleware to be passed into createStore (configureStore) we actually have to pass it as the third argument
 * --
 * The second argument is if we want to add any additional defaults states here
 */
/**
 * 
 *Key Redux Concepts:

Store: The store is the central place where the application's state is held. It allows you to access and modify the state.

Reducers: Reducers are pure functions that specify how the application's state changes in response to actions. They take the current state and an action as arguments and return a new state.

Actions: Actions are plain JavaScript objects that describe what happened in the application. They typically have a type property that specifies the type of action and may contain additional data.

Middleware: Middleware provides a way to interact with actions before they reach the reducers. It can be used for logging, async operations, and more.

Dispatch: Dispatching an action is the process of sending an action to the Redux store. It triggers the state change based on the action and invokes the reducers.
 */