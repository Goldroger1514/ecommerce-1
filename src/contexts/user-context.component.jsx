import { createContext, useState, useEffect } from "react"
import { createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase.utils"
export let UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})
export let UserProvider = ({ children }) => {
  useEffect(() => {
    let stopListeningFunction = onAuthStateChangedListener((user) => {
      /**
       * the user argument passed to the onAuthStateChangedListener callback typically represents the currently authenticated user.
       * user maybe null or it's an authenticated user object
       * null => when the user signs out
       */
      if (user)
        createUserDocumentFromAuth(user)
      /**
       * Luckily for us inside of our create user document auth object , we know that we get the snapshot
       * And the snapshot will dig into that place in the database given the UID we get from the auth and it will determine whether or not this object exists or not
       * If it doesn't exist ,we create a new instance in our database
       */
      setCurrentUser(user)
    })
    return stopListeningFunction
    /**
     * When a user signs in , that's considered an auth change because a user has authenticated 
     * When a user signs out , that's another change
     * Both times our callback is going to get invoked whenever a user authenticates in and whenever a user authenticates out
     */
  }, [])
  let [currentUser, setCurrentUser] = useState(null)
  let value = { currentUser, setCurrentUser }
  return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}
