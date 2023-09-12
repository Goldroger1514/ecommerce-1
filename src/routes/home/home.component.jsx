import Directory from '../../components/directory/directory.component'
import { Outlet } from 'react-router-dom'
import { Fragment } from 'react'
let Home = () => {
    return (
        <Fragment>
            <Directory />
        </Fragment>
    )
}
export default Home