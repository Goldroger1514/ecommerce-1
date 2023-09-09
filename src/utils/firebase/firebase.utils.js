import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, FacebookAuthProvider, signOut } from 'firebase/auth'
import { collection, writeBatch } from 'firebase/firestore';
import { query, getDocs } from 'firebase/firestore'
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
// the auth is also keeping track of what users are signed in right now ...

/**
 * The collection methods will allow us the same way when we were getting a document reference to get a collection reference
 * because we're trying to write to a new collection
 */
export let addCollectionDocuments = async (collectionKey, objectsToAdd) => {
    /**
     * As we learned with user document references ,as long as we try and find something in the database
     * Firebase is actually going to create on for us even if it's not populated
     * Because that's what the document references , now in our particular case now we're making a collection reference
     */
    let collectionRef = collection(db, collectionKey)
    /**
     * Yihua:1000$ => 900
     * -100
     * 
     * 
     * Andrei:1000$ => 1100$
     * +100
     * 
     * # These are two different writes , which means both of these writes have to go through in order for the transaction of me transfering 100$
     * This is considered as one unit of work , even though there are two seperate write events happening (-100 , +100)
     * Successful transaction
     * 
     * Two instances in the bank
     * 
     * Let's say i wanted to transfer 100$ from my bank account into andre's bank account
     * What needs to happen on the database is that this database needs to see -100 on 1000$(Yihua)
     */
    /**
     * A batch is what we get from that writeBatch method 
     * What batch allows me to do is attach a bunch of different (writes,deletes,sets) whatever
     * We can attach all of these to the batch, and only when we're ready to fire off the batch does the actual transaction begins
     * 
     * So what we need to do is create a bunch of set methods or set events
     * Because each object of the objectsToAdd were saying that i want you to create and set that object into this collectionRef as a new document for me
     */
    let batch = writeBatch(db)
    objectsToAdd.forEach(object => {
        /**
         * the collectionRef actually tells this doc method which database were using
         * because we've got the collectionRef from calling collection where the db is passed
         * So the doc method is smart enough to know you're giving me a collectionRef, most likely you got it because you've already told that collectionRef what db it's from
         */
        let docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
        /**
         * firebase will give us back a document reference event if it doesn't exist yet 
         * It will just point to that place for this specific key inside of our collectionRef
         * set that location with the value as the object itself
         */
    })
    await batch.commit()
}
export let getCategoriesAndDocuments = async () => {
    let collectionRef = collection(db, 'categories')
    let q = query(collectionRef)
    let querySnapShot = getDocs(q)
    /**
     * Fetch those documents snapshots that we want 
     */
    let categoryMap = (await querySnapShot).docs.reduce((acc, docSnapShot) => {
        let { title, items } = docSnapShot.data()
        acc[title.toLowerCase()] = items
        return acc
    }, {})
    /**
     * Will give us an array of all of those individual documents indie
     * and the snapshots are the actual data themself
     */
    return categoryMap
}