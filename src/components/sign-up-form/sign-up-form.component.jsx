import { Fragment, useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import './sign-up-form.styles.scss'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
let defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}
let SignUpForm = () => {
  let [formFields, setFormFields] = useState(defaultFormFields)
  let { displayName, email, password, confirmPassword } = formFields
  let handleChange = (event) => {
    let { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }
  let handleSubmit = async (event) => {
    if (password != confirmPassword) {
      alert('Passwords does not match')
      return
    }
    try {
      let response = await createAuthUserWithEmailAndPassword(email, password)
      let user = response.user
      let userDocRef = await createUserDocumentFromAuth(user, { displayName })
      setFormFields({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (error) {
      if (error.code == 'auth/email-already-in-use')
        alert('Email already in use')
    }
  }
  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form action="" onSubmit={(event) => {
        event.preventDefault()
        handleSubmit()
      }}>
        <FormInput
          label='Display Name'
          type='text'
          onChange={handleChange}
          value={displayName}
          name='displayName'
          required />
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
        <FormInput
          label='Confirm Password'
          type='password'
          onChange={handleChange}
          value={confirmPassword}
          name='confirmPassword'
          required />
        <Button buttonOptions={{ type: 'submit' }}>Sign Up</Button>
      </form>
    </div>
  )
}
export default SignUpForm
//Starting need for context