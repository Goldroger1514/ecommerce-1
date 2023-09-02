/**
 * the context is very similiar to a component that wraps around all of your other components that needs access to 
 * this context
 * We can kind of see it as a storage place , except it's a component that exclusively store things 
 */
import { createContext, useState } from "react"
/**
 * We can see the context as being of two pieces
 * One is actual storage thing itself and this is the literal context , so for us because it's a user context , we're going to call it UserContext
 */
// as the actual value we want to access
export let UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})//builds a context for us (default value is an object)

//povider
/**
 * A provider is the actual component
 */
export let UserProvider = ({ children }) => {
  /**
   * What we know is that we want to store a user object so 
   */
  let [currentUser, setCurrentUser] = useState(null)
  /**
   * As we rememeber , a component re renders whenever it's state updates or whenever it's props changes
   * Here we can imagine that this useState value setter function was called this current user value updates
   * That means that any component that is listening for current user should in turn update
   * Meaning that it should re render
   */
  let value = { currentUser, setCurrentUser }
  /**
   * So essentially this provider is allowing any of its child components to access the values inside of its useState
   * I want to be able to call this setter and get the value anywhere inside of the component tree that is nested within this actual provider value
   * 
   */
  return <UserContext.Provider value={value} >{children}</UserContext.Provider>
  /**
   * So on every context that gets built for us , there is a dot provider and the dor provider is the component that will wrap around any other components
   * that needs access to the values inside
   */
}
/**
 * <UserProvider>
 * <App/> => children
 * </UserProvider>
 */

/**
 * createContext and Default Value:
  In React, when you create a context using createContext, you provide a default value. This default value is
  used when a component that consumes the context is rendered outside the scope of a Provider.
  It serves as a fallback in case the component doesn't find a matching Provider higher up in the component tree.

In your code:
export let UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
});
  This means that if a component uses UserContext.Consumer without being wrapped in a UserProvider,
  it will have access to an object with default values of currentUser: null and setCurrentUser being a function that returns null.
  This is useful to avoid crashes if a consumer is used without a provider.
 */
/**
 * useState and UserProvider:
In your UserProvider component, you are using the useState hook to manage the current user state:
let [currentUser, setCurrentUser] = useState(null);
This is the actual state that the UserProvider holds. The purpose of UserProvider is to wrap its children with a UserContext.Provider so
  that components nested within it can access this state.

Provider's value prop:
The UserProvider uses the value prop of UserContext.Provider to pass down the state to its child components:

return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
This is how the state, which includes currentUser and setCurrentUser, is made available to any components that are descendants of the UserProvider.

In summary, the default value provided in createContext acts as a fallback when a component consumes the context without being wrapped in
  a provider.
  On the other hand, the state managed by useState in UserProvider represents the actual data that will be shared among
  components when they are wrapped within the UserProvider
 */