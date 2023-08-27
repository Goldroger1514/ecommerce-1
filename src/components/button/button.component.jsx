/**
 * We have three types of buttons
 * 1- default
 * 2- inverted
 * 3- google sign in 
 */
import './button.styles.scss'
let BUTTON_TYPES_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
  '': ''
}
let Button = ({ children, clickHandler, buttonType = '', buttonOptions }) => {
  return (
    <button onClick={typeof clickHandler == 'function' ? clickHandler : () => { }} className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`} {...buttonOptions} >
      {children}
    </button>
  )
}
export default Button