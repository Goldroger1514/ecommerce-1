import { Outlet, Link } from 'react-router-dom'
import { Fragment } from 'react'
import { ReactComponent as CrwnLogo } from '../../assets/87 - crown.svg'
import './navigation.styles.scss'
let Navigation = () => {
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