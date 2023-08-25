import { initializeApp } from 'firebase/app'
import { getFireStore, doc, getDoc, setDoc } from 'firebase/firestore'
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
let provider = new GoogleAuthProvider()//gives back provider instance
provider.setCustomParameters({
    prompt: 'select_account',//what this means that everytime someone interacts with our provider, we want to awlays force them to select an account
})
export let auth = getAuth()
export let signInWithGooglePopup = () => {
    return signInWithPopup(auth, provider)
}
/**
 * doc method is what we need to actually get a document instance
 * getDoc gets the data inside the document
 * setDoc sets the data inside the document
 */
// We need to create the db
let db = getFireStore()
// This now allows us now to tell Firebase when we want to get a document or we want set a document or anything like that related to our database
// It directly points to our database inside of the consol
export let createUserDocumentFromAuth = async (userAuth) => {
    // first we need to see if there is an existing document reference
    let userDocRef = doc(db, 'users', userAuth.uid)//db , collection , identifier(key|id)
    /**
     * What's interesting about google Firestor is that even though right now , we don't have a users collection in our database
     * But Google will still generate this object
     */
    console.log(userDocRef)
}