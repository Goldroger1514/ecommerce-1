import styled from 'styled-components'
import { ReactComponent as ShoppingSvg } from '../../assets/115 - shopping-bag.svg'
/**
 * Normally what we want to think about your components when it comes to whether or not you want  to make a brand new component to wrap it
 * or if you want to target it some other way
 * So the way we want to target the shopping-icon is we know that there's some styling that's going to be applied on this component (CartIcon)
 * And as we mentioned before ,we can actually directly just target our own components including SVG components
 */
export let ShoppingIcon = styled(ShoppingSvg)`
  width: 24px;
  height: 24px;
`
export let CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
export let ItemCount = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`