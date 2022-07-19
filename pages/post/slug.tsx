import React from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { products } from '../../untils/data'
import Layout from '../../components/Layout'
import { Button, Grid, Link, List, ListItem, Toolbar, Typography, Card } from '@mui/material'
import styles from "../../styles/Amazon.module.scss"
import Image from 'next/image'
export default function ProductDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const product = products.find((a) => a.slug == slug);
  if (!product) {
    return <div>Product not found</div>
  }
  return (
    <Layout title={product.name}>
      <div className={styles.page_product_detail}>
        <Toolbar className={styles.detail_breadcrumb}>
          <NextLink href='/' passHref className='breadcrumb_link'>
            <Link>
              <Typography>Home </Typography>
            </Link>
          </NextLink>
          <Typography> / {product.name}</Typography>
        </Toolbar>
        <Grid container spacing={1}>
          <Grid item md={6} xs={12}>
            <Image src={product.image} alt={product.name} width={600} height={600} layout="responsive"></Image>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Typography component="h5" variant='h5'>
                    {product.name}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    Category:{product.category}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    Brand:{product.brand}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    Rating:{product.rating} starts ({product.numReview} review)
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    Price:{product.price} USD
                  </Typography>

                </ListItem>
                <ListItem>
                  <Typography>
                    Desciption:{product.description}
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
                        ${product.price}
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
                        {product.countInStock > 0 ? 'Instock' : 'Unavailable'}
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Button variant="contained" color="primary">
                    {product.countInStock > 0 ? ' Add to card' : 'Unavailable'}
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