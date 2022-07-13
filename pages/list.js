import Image from 'next/image'
import React from 'react'
import { fetcher } from '../untils/api'
import Item from './item'

const List = ({ products }) => {
    return (
            <>
            <Item products={products} />
                {products && products.data.map((product)=> {
                    return (
                        <li key={product.id}>
                            <p>{product.attributes.title}</p>
                            <Image src={product.attributes.img.data.attributes.formats.thumbnail.url} alt={product.attributes.title}  layout='fill' />
                        </li>
                    )
                })}
            </>
    )
}

export default List
export async function getStaticProps() {
    // const products = await fetcher(`${process.env.STRAPI_ENDPOINT}/products?populate=*`);
    const data = await fetcher(`http://localhost:1337/api/products?populate=*`);
    console.log(data);
    return {
        props: {
            products: data
        }
    }
}