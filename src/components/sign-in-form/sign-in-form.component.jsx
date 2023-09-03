import { Fragment, useState } from 'react'
import { createAuthUserWithEmailAndPassword, signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import '../sign-up-form/sign-up-form.styles.scss'
import { useContext } from 'react'
import { UserContext } from '../../contexts/user-context.component.jsx'
let defaultFormFields = {
  email: '',
  password: '',
}
let SignInForm = () => {
  let [formFields, setFormFields] = useState(defaultFormFields)
  let { email, password } = formFields
  let { setCurrentUser } = useContext(UserContext)// returns the value object
  let handleChange = (event) => {
    let { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }
  let handleSubmit = async (event) => {
    try {
      let response = await signInAuthUserWithEmailAndPassword(email, password)
      setFormFields({
        email: '',
        password: ""
      })
    } catch (error) {
      console.log(error.code)
      if (error.code == 'auth/wrong-password')
        alert('wrong password for email')
      else if (error.code == 'auth/user-not-found') {
        alert('User not found')
      }
    }
  }
  let signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='sign-in-container'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form action="" onSubmit={(event) => {
        event.preventDefault()
        handleSubmit()
      }}>
        <FormInput
          label="Email"
          type='email'
          onChange={handleChange}
          value={email}
          name='email'
          required />
        <FormInput
          label='Password'
          type='password'
          onChange={handleChange}
          value={password}
          name='password'
          required />
        <div className='buttons-container' >
          <Button buttonOptions={{ type: 'submit' }}>Sign In</Button>
          <Button clickHandler={signInWithGoogle} buttonType='google' buttonOptions={{ type: 'button' }}>Google Sign in</Button>
        </div>
      </form>
    </div>
  )
}
export default SignInForm