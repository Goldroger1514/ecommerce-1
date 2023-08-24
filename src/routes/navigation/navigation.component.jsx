import { Outlet, Link } from 'react-router-dom'
import { Fragment } from 'react'
import './navigation.styles.scss'
/**
 * A fragment is useful if you don't actually want to render some specific HTML element
 * For example if i just want a div that represents the actual navigation and then i want the components that represent
 * my pages down below, i don't need a wrapping div (nav-bar)
 */
/**
 * Link is essentially an anchor tag, but what it does is that it actually appropriately , dynamically uses the correct browser that you have
 * that you have installed (BrowserRouter) and it will take your application to taht specific place
 * This is not so important for us because it behaves pretty much justl ike an anchor tag inside of a browser router 
 * But if we were using other types of routers, that might be a little bit of different behavior
 * What we need to know is that Link component is what we utilize in order to leverage proper routing , just like we do with anchor tags
 */
let Navigation = () => {
    return (
        <Fragment >
            <div className='navigation'>
                <div className='logo' >
                    <Link className='logo-container' to='/' >
                        <div>Logo</div>
                    </Link>
                </div>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop' >
                        SHOP
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Navigation