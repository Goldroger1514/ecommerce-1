import styled from 'styled-components'
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles'
export let CartDropdownContainer = styled.div`
  position: absolute;
  width: 280px;
  max-height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  ${BaseButton},${GoogleSignInButton},${InvertedButton}{
    margin-top:auto
  }
`
/**
 * So if any of these three components get nested inside of CartDropDownContainer , then apply these styles to them
 */
export let EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
  ${CartDropdownContainer}{
    position:static;
  }
`
/**
 * What we're saying here that we want to target any CartDropDownContainer that is a child of EmptyMessage
 * Make sure that wichever component needs to target an earlier one comes after 
 */
export let CartItems = styled.div`
  max-height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`
/**
 * As we seen before , each of these components get custom class names when style components actually gets compiled
 * And on that random class is how these styles got attached which is how we're able to make sure that in our finally compiled CSS
 * it doesn't actually conflict or crash
 * But this also means that style components actually knows what those new randomly generated class names will be
 * And we can target them inside of our styling for a style component
 */