import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'
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
let googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: 'select_account',
})
export let auth = getAuth()
export let signInWithGooglePopup = () => {
    return signInWithPopup(auth, googleProvider)
}
export let signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)
/**
 * There are different providers that we can have 
 * wether we want to sign in with facebook , or github ...
 * These are all different providers that we can pull in
 * This is why these providers are instantiated as classes
 * with signInWithGooglePopup , i know that this pop up is going to be google because the provider i'm generating for it is Google provider
 */
let db = getFirestore()
export let createUserDocumentFromAuth = async (userAuth) => {
    let userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)
    let userSnapshot = await getDoc(userDocRef)
    if (!userSnapshot.exists()) {
        let { displayName, email } = userAuth
        let createdAt = new Date()
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('Error while creating the user ' + error)
        }
    } else {
        return userDocRef
    }
}

