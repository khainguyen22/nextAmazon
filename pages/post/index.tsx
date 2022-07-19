import React from 'react'
import { Card, CardMedia, Grid, CardActionArea, CardContent, Typography, CardActions, Button } from '@mui/material'
import NextLink from 'next/link'
import Layout from '../../components/Layout'
import styles from "../../styles/Amazon.module.scss";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Image from 'next/image'
const slideImages = [
    {
        url: '/slide/slide4.jpg'
    },
    {
        url: '/slide/slide5.jpg'
    },
    {
        url: '/slide/slide3.jpg'
    }
];
const Index = ({ posts }: { posts: any }) => {
    return (
        <Layout title="Posts ">
            <Slide cssClass={styles.slide}>
                {slideImages.map((slideImage, index) => (
                    <Card className="each-slide" key={index}>
                        <CardContent style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                            <Image src={slideImage.url} alt="a" width={1200} height={400} layout='responsive' />
                        </CardContent>
                    </Card>
                ))}
            </Slide>
            <div className={styles.product_container}>
                <Grid container spacing={3} className={styles.container}>
                    {posts.map((product: { id: any; attributes: { image: { data: { attributes: { url: any; }; }[]; }; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }; }, i: React.Key | null | undefined) => (
                        <Grid item md={3} key={i} className={styles.product_grid}>
                            <Card className={styles.product_card}>
                                <NextLink href={`/post/${product.id}`} passHref>
                                    <CardActionArea>
                                        <CardMedia component="img" image={`http://localhost:1337${product.attributes.image.data[0].attributes.url}`}></CardMedia>
                                        <CardContent className={styles.product_content}>
                                            <Typography component='h6' variant='h6' className={styles.content_name}>
                                                {product.attributes.name}
                                            </Typography>
                                            <Typography>
                                                ${product.attributes.price}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </NextLink>
                                <CardActions className={styles.product_add_to_card}>
                                    <Button size='small' color='primary' variant="contained">
                                        <Typography>Add to card</Typography>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Layout >
    )
}
export const getStaticProps = async () => {
    try {
        const res = await fetch('http://localhost:1337/api/products?populate=*')
        const data = await res.json()
        const posts = data.data
        if (posts) {
            return {
                props: {
                    post: posts,
                }
            }
        }
        else {
            return {
                props: {
                    posts: "",
                }
            }
        }
    } catch (error) {
        return { notFound: true };
    }
}
export default Index