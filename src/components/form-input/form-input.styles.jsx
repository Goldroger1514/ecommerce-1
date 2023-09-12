import styled, { css } from 'styled-components'
/**
 * The css block allows us to encapsulate some CSS inside of a block that we can use as a variable and inject it
 * into our different components
 */
let subColor = 'grey'
let mainColor = 'black'
let shrinkLabelMixin = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`
export let FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${(props) => {
    let { shrink } = props
    return shrink && shrinkLabelMixin
  }}
`
export let Input = styled.input`
    background: none;
    background-color: white;
    color: ${subColor};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 3px;
    border-bottom: 1px solid ${subColor};
    margin: 25px 0;
    &:focus {
      outline: none
    }
    &.color {
      background-color: rgb(139 169 169 / 24%);
    }
    &:focus~ ${FormInputLabel} {
      ${shrinkLabelMixin}
    }
`
export let Group = styled.div`
  position: relative;
  margin: 45px 0;
`