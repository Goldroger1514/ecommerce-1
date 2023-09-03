import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, FacebookAuthProvider, signOut } from 'firebase/auth'
/**
 * An observable listener is a way for us to hook into some kind of stream of events
 * Whether these events are sign in events or sign out events were actually able to trigger something based on these changes
 */
import { onAuthStateChanged } from 'firebase/auth';//returns a listener
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
/**
 * the auth object is keeping track of whether or not the user has signed in or sign out using the different sign in and sign out methods that we have been calling
 * And it persists this between refreshes
 */
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
export let createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    let userDocRef = doc(db, 'users', userAuth.uid)
    //console.log(userDocRef)
    let userSnapshot = await getDoc(userDocRef)
    if (!userSnapshot.exists()) {
        let { displayName, email } = userAuth
        let createdAt = new Date()
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        } catch (error) {
            console.log('Error while creating the user ' + error)
        }
    } else {
        return userDocRef
    }
}
export let signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password)
        return
    return await signInWithEmailAndPassword(auth, email, password)
}
export let createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password)
        return
    return await createUserWithEmailAndPassword(auth, email, password)//native provider
}
export let signOutUser = async () => await signOut(auth)
// the auth is also keeping track of what users are signed in right now ... ...
export let onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)
/**
 * What this observer does is it returns you back whatever you get back from onAuthStateChange
 */
/**
 * Every time this auth state change, call the callback function
 */