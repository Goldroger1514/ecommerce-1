import { CategoryBodyContainer, BackgroundImage, CategoryItemContainer } from './category-item.styles'
import { useNavigate } from 'react-router-dom'
let CategoryItem = ({ category }) => {
    let navigate = useNavigate()
    let { imageUrl, title, route } = category
    return (
        <CategoryItemContainer >
            <BackgroundImage imageUrl={imageUrl} />
            <CategoryBodyContainer onClick={() => {
                navigate(`${route}`)
            }} >
                <h2>{title.toUpperCase()}</h2>
                <p>SHOP NOW</p>
            </CategoryBodyContainer>
        </CategoryItemContainer>
    )
}
export default CategoryItem