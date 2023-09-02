import { Fragment, useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import './sign-up-form.styles.scss'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import { useContext } from 'react'
import { UserContext } from '../../contexts/user-context.component'
let defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}
let SignUpForm = () => {
  let [formFields, setFormFields] = useState(defaultFormFields)
  let { displayName, email, password, confirmPassword } = formFields
  let value = useContext(UserContext)
  /**
   * SignUp component is now hooked into the context
   * Everytime UserContext value changes, this component is going to rerun
   * We notice that none of the actual portions of the DOM updates , despite the fact that  react reran the entire function
   * It did not actually re render anything on the DOM 
   * The reason for this is because nothing changed on the DOM
   * So this is where that Virtual DOM and the actuall reconciliation steps that we walk through way back
   * 
   * If we have multiple components that are all listening to a context , even tough they don't use the actual values
   * For example here as we see , we're just initializing the value , we don't actually do anything with it 
   * The fact that we're hooked into the context will cause react to rerun the function
   * 
   * But it doesn't mean that it will re render anything to the DOM because it only will if your JSX values actually updates
   * 
   * However , we still need to think about the fact that all of the code up until that return statement is still getting called
   * 
   * The fact taht this code is getting called could cause a performance proglem if you have hundereds of components that are all hooked into a context
   * 
   * 
   * We can kinda of see useContext as just a glorified hook into another component that will re render it subsequent hooked components whenever this component updates in some way (userComponent)
   */
  console.log('Hit')
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
//hsdkfsdfsdf