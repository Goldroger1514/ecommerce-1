import { initializeApp } from 'firebase/app'
import { getFireStore, doc, getDoc, setDoc } from 'firebase/firestore'
// Your web app's Firebase configuration
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
    xx: 1,
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
//Starting users doc
