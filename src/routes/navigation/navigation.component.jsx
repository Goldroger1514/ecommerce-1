import { Outlet, Link } from 'react-router-dom'
import { Fragment } from 'react'
import { ReactComponent as CrwnLogo } from '../../assets/87 - crown.svg'
import { useContext } from 'react'
import { UserContext } from '../../contexts/user-context.component.jsx'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CardIcon from '../../components/cart-icon/card-icon.component'
import CartDropdown from '../../components/cart-drop-down/cart-dropdown.component'
import { CartContext } from '../../contexts/cart.context'
import { NavigationContainer, LogoContainer, NavLink, NavLinksContainer } from './navigation.styles'
let Navigation = () => {
    let { currentUser, setCurrentUser } = useContext(UserContext)
    let { isCartOpen } = useContext(CartContext)
    let signOutHandler = async () => {
        // let result = await signOutUser()
        // console.log(result)//undefined
        await signOutUser()
        setCurrentUser(null)
    }
    return (
        <Fragment >
            <NavigationContainer>
                <div className='logo' >
                    <LogoContainer to='/' >
                        <CrwnLogo />
                    </LogoContainer>
                </div>
                <NavLinksContainer>
                    <NavLink className='nav-link' to='/shop' >
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' className='nav-link' onClick={signOutHandler} to='/authentication' >Sign Out</NavLink>
                        ) : <NavLink className='nav-link' to='/authentication' >
                            SIGN IN
                        </NavLink>
                    }
                    <CardIcon />
                </NavLinksContainer>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}
export default Navigation