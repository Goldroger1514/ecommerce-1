import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
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
let db = getFirestore()
// This allows us now to tell Firebase when we want to get a document or we want set a document or anything ike that related to our database
// It directly points to our database
/**
 * doc: What we need to actually get a document instance
 * getDoc: When you want to access the data on those document
 * setDoc: When you want to set the data on those document
 */
export let createUserDocumentFromAuth = async (userAuth) => {
    /**
     * What we need to do first is that we need if there is an existing document reference
     */
    let userDocRef = doc(db, 'users', userAuth.uid)//db,collectionName,(id|key)
    /**
     * What's interesting about Google Firestore is that even though right now this object doesn't exist (the document reference doesn't exist in our database)
     * But Google will still generate this object
     * The reason why Google does this is because this reference points to some now unique point inside of the database
     * There's nothing there for this ID So google say there's no harm i'm not going to override anything with this ID
     * By giving us this reference Google wants us to suer this specific document reference object that they provided us in order to set data there
     * because it's already king of pointing to some place inside of our database
     * We can imagine that there is now this users collection that Google hasn't made yet but it knows that 's it pointing there
     * And inside of that users's collection is that specific user ID
     */
    console.log(userDocRef)
    let userSnapshot = await getDoc(userDocRef)
    /**
     * The snapShot allows us to check wether or not there is an instance of it that exists inside of our database
     * and it also allows us to access the data
     */
    console.log(userSnapshot)
    console.log(userSnapshot.exists())//false
    /**
     * exists() methods tells us if inside of our database does that reference object and the data related to that reference exists or not
     */
    // if users data exists
    // return userDocRef
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
    // if user data doesn't exist

}
//Start sign in with redirect