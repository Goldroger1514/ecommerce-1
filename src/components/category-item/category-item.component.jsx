import './category-item.styles.scss'
let CategoryItem = ({ category }) => {
    // let { category } = props
    return (
        <div className='category-container' >
            {/* <img src={`${category.imageUrl}`} /> */}
            <div className='background-image'
                style={{
                    backgroundImage: `url(${category.imageUrl})`
                }}
            />
            <div key={category.id} className='category-body-container'>
                <h2>{category.title}</h2>
                <p>SHOP NOW</p>
            </div>
        </div>
    )
}
export default CategoryItem