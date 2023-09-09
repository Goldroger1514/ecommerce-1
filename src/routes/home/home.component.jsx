import Directory from '../../components/directory/directory.component'
import { Outlet } from 'react-router-dom'
let Home = () => {
    let categories = [
        {
            "id": 1,
            "title": "hats",
            "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
            testing: 10
        },
        {
            "id": 2,
            "title": "jackets",
            "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
            "id": 3,
            "title": "sneakers",
            "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
            "id": 4,
            "title": "womens",
            "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
        },
        {
            "id": 5,
            "title": "mens",
            "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
        }
    ]
    return (
        <div>
            <Outlet />
            <Directory categories={categories} />
        </div>
    )
    /**
     * the <Outlet /> component is used to indicate the location where the nested routes should be rendered within their parent route's component.
     */
}
export default Home