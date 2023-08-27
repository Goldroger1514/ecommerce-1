import { Fragment } from 'react'
import './form-input.styles.scss'
let FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group' >
      <input
        className={`${otherProps.value.length > 0 ? 'color' : ''} form-input`}
        {...otherProps}
      />
      {(label && <label className={`${otherProps.value.length > 0 ? 'shrink' : ''} form-input-label`} >{label}</label>)}
    </div>
  )
}
export default FormInput