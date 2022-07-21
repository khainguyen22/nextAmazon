import React from 'react'
import NextLink from 'next/link'
import Layout from '../../components/Layout'
import { Button, Grid, Link, List, ListItem, Toolbar, Typography, Card, CardMedia, CardActionArea } from '@mui/material'
import styles from "../../styles/Amazon.module.scss"

const Detail = ({ post }: { post: any }) => {
    return (
        <Layout title="ID">
            <div className={styles.page_product_detail}>
                <Toolbar className={styles.detail_breadcrumb}>
                    <NextLink href='/' passHref className='breadcrumb_link'>
                        <Link>
                            <Typography>Home </Typography>
                        </Link>
                    </NextLink>
                    <Typography> / {post.attributes.name}</Typography>
                </Toolbar>
                <Grid container spacing={1}>
                    <Grid item md={6} xs={12}>
                        <CardActionArea>
                            <CardMedia component="img" image={`http://localhost:1337${post.attributes.name}`}></CardMedia>
                        </CardActionArea>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Card>
                            <List>
                                <ListItem>
                                    <Typography component="h5" variant='h5'>
                                        {post.attributes.name}
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography>
                                        Category:{post.attributes.category}
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography>
                                        Brand:{post.attributes.brand}
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography>
                                        Rating:{post.attributes.rating} starts ({post.attributes.numReview} review)
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography>
                                        Price:{post.attributes.price} USD
                                    </Typography>

                                </ListItem>
                                <ListItem>
                                    <Typography>
                                        Desciption:{post.attributes.description}
                                    </Typography>
                                </ListItem>
                            </List>
                        </Card>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Card>
                            <List>
                                <ListItem>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Typography>
                                                Price
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography>
                                                ${post.attributes.price}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <ListItem>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Typography>
                                                Status
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography>
                                                {post.attributes.countInStock > 0 ? 'Instock' : 'Unavailable'}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <ListItem>
                                    <Button variant="contained" color="primary">
                                        {post.attributes.countInStock > 0 ? ' Add to card' : 'Unavailable'}
                                    </Button>
                                </ListItem>
                            </List>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </Layout >
    )
}

export default Detail
export async function getStaticPaths() {
    const res = await fetch(`http://localhost:1337/api/products?populate=*`)
    const post = await res.json()
    const paths = post.data.map((post: { id: any }) => {
        return {
            params: {
                id: `${post.id}`
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps(context: { params: any }) {
    try {
        const { params } = context
        const res = await fetch(`http://localhost:1337/api/products/${params.id}?populate=*/`)
        const dataPost = await res.json()
        const posts = dataPost.data
        if (posts) {
            return {
                props: {
                    post: posts,
                }
            }
        }
    } catch {
        return {
            redirect: {
                destination: "/404",
            },
        }
    }
}