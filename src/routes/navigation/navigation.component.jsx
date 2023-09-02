import { Outlet, Link } from 'react-router-dom'
import { Fragment } from 'react'
import { ReactComponent as CrwnLogo } from '../../assets/87 - crown.svg'
import './navigation.styles.scss'
import { useContext } from 'react'
import { UserContext } from '../../contexts/user-context.component.jsx'
let Navigation = () => {
    let { currentUser } = useContext(UserContext)
    // console.log(currentUser)
    /**
     * Why is it that this component ran
     * Remember the fact that we logged it means that our functional component was re rendered
     * The reason why is becasue useContext as a hook tells this component oh whenever a value inside of this context updates , re render me
     * because the value inside of the userContext has been updated and the reason this triggers is because of the useState inside of the user-context component
     * being called with the setter function
     */
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
                    <Link className='nav-link' to='/authentication' >
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Navigation