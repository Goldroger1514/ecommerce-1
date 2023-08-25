import { initializeApp } from 'firebase/app'
/**
 * The intializeApp function creates an app instance for you based off of some type of config
 * This config is an object that allows us to attach this Firebase app instance to that instance that we have online
 */
// Your web app's Firebase configuration
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBPMcx8TlZryYLVn-dZBXyGSl9LaQv9L1c",
    authDomain: "crown-clothing-db-3d800.firebaseapp.com",
    projectId: "crown-clothing-db-3d800",
    storageBucket: "crown-clothing-db-3d800.appspot.com",
    messagingSenderId: "1041850483979",
    appId: "1:1041850483979:web:b16696f7b45d6bbd964e0e"
};

// Initialize Firebase
const firbaseApp = initializeApp(firebaseConfig);
/**
 * We end up passing the firebaseConfig object to the intializeApp method
 * What this config does is it identifies this SDK
 * Which is essentially a developer kit that we're using 
 * So the library itself , this library is just some JavaScript library that abstracts away some of the functionality what we need to use in order to
 * interact with our instance of firebase
 * So those CRUD operations are going to happen using this firbase app instance
 * fireBase app takes the firebaseConfig which tells him that this is the specific crown-clothing-db instance which is the firebase instance that we made
 * 
 */
let provider = new GoogleAuthProvider()//gives back provider instance
provider.setCustomParameters({
    prompt: 'select_account',//what this means that everytime someone interacts with our provider, we want to awlays force them to select an account
})
export let auth = getAuth()
export let signInWithGooglePopup = () => {
    return signInWithPopup(auth, provider)
}
//reverting back to old version
//Reverting back to older version