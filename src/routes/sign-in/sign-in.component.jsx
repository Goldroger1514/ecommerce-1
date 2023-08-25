import { Fragment } from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
let SignIn = () => {
    let logGoogleUser = async () => {
        let response = await signInWithGooglePopup()
        createUserDocumentFromAuth(response)
    }
    return (
        <Fragment>
            <h1>Hello , Iam sign in page</h1>
            <button onClick={logGoogleUser} >Sign in with google popup</button>
        </Fragment>
    )
}
export default SignIn