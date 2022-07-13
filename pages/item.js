const Item = ({products}) => {
    return (
        <>
            <ul>List data
                {products && products.data.map((product)=> {
                    return (
                        <li key={product.id}>
                            <p>{product.attributes.title}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
export default Item;