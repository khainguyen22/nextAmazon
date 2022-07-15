import React from 'react'
const Test = () => {
    return (
        <div>Test
            {/* {posts.map((index, value) => {
                <li key={value.id}>{value.data.id}</li>
            }) */}
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:1337/api/products?populate=*')
    const posts = await res.json()
    console.log(posts);

    return {
        props: {
            posts,
        },
    }
}
export default Test
