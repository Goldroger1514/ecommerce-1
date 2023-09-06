import { Outlet, Link } from 'react-router-dom'
import { Fragment } from 'react'
import { ReactComponent as CrwnLogo } from '../../assets/87 - crown.svg'
import './navigation.styles.scss'
import { useContext } from 'react'
import { UserContext } from '../../contexts/user-context.component.jsx'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CardIcon from '../../components/cart-icon/card-icon.component'
import CartDropdown from '../../components/cart-drop-down/cart-dropdown.component'
import { CartContext } from '../../contexts/cart.context'
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
            <div className='navigation'>
                <div className='logo' >
                    <Link className='logo-container' to='/' >
                        <CrwnLogo />
                    </Link>
                </div>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop' >
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <Link className='nav-link' onClick={signOutHandler} to='/authentication' >Sign Out</Link>
                        ) : <Link className='nav-link' to='/authentication' >
                            SIGN IN
                        </Link>
                    }
                    <CardIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Navigation