/**
 * We have three types of buttons
 * 1- default
 * 2- inverted
 * 3- google sign in 
 */
import { BaseButton, GoogleSignInButton, InvertedButton } from './button.styles.jsx'
export let BUTTON_TYPES_CLASSES = {
  base: 'base',
  google: 'google',
  inverted: 'inverted',
}
let getButton = (buttonType = BUTTON_TYPES_CLASSES.base) => {
  let map =
  {
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton
  }
  return map[buttonType]
}
let Button = ({ children, clickHandler, buttonType = BUTTON_TYPES_CLASSES.base, buttonOptions }) => {
  let CustomBtn = getButton(buttonType)
  return (
    <>
      <CustomBtn onClick={typeof clickHandler == 'function' ? clickHandler : () => { }} className={`button-container`} {...buttonOptions} >
        {children}
      </CustomBtn>
    </>
  )
}
export default Button