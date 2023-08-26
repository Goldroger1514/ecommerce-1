import { Fragment } from 'react'
import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
let SignIn = () => {
    useEffect(async () => {
        //run this when this component mounts for the first time
        let response = await getRedirectResult(auth)
        if (response) {
            let userDocRef = await createUserDocumentFromAuth(response.user)
        }
        console.log(response)
    }, [])
    let logGoogleUser = async () => {
        let response = await signInWithGooglePopup()
        let userDocRef = await createUserDocumentFromAuth(response.user)
        console.log(userDocRef)
    }
    let logGoogleRedirectUser = async () => {
        let response = await signInWithGoogleRedirect()
        //any code after this will not be executed because once we are redirected ,our entire application gets unmounted
        let userDocRef = await createUserDocumentFromAuth(response.user)
        console.log(response.user)
    }
    return (
        <Fragment>
            <h1>Hello , Iam sign in page</h1>
            <button onClick={logGoogleUser} >Sign in with google popup</button>
            <button onClick={signInWithGoogleRedirect} >Sign in with google redirect</button>
        </Fragment>
    )
}
export default SignIn