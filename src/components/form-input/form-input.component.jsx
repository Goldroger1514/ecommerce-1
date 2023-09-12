import { Fragment } from 'react'
import { FormInputLabel, Input, Group } from './form-input.styles'
let FormInput = ({ label, ...otherProps }) => {
  return (
    <Group >
      <Input
        className={`${otherProps.value.length > 0 ? 'color' : ''} form-input`}
        {...otherProps}
      />
      {(label && <FormInputLabel shrink={otherProps.value.length} className={`form-input-label`} >{label}</FormInputLabel>)}
    </Group>
  )
}
export default FormInput