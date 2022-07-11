import { Card, CardMedia, Grid, CardActionArea, CardContent, Typography, CardActions, Button } from '@mui/material'
import type { NextPage } from 'next'
import NextLink from 'next/link'
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import Layout from '../components/Layout'
import { products } from '../untils/data'
import styles from "../styles/Amazon.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      {/* <Layout title="Home" description=""> */}
      <Layout>
        <div className={styles.product_container}>
          <Grid container spacing={3} className={styles.container}>
            {products.map((product: { id: Key | null | undefined; slug: string | undefined; image: string | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined; price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => (
              <Grid item md={3} key={product.id} className={styles.product_grid}>
                <Card className={styles.product_card}>
                  <NextLink href={`/product/${product.slug}`} passHref>
                    <CardActionArea>
                      <CardMedia component="img" image={product.image}></CardMedia>
                      <CardContent className={styles.product_content}>
                        <Typography component='h6' variant='h6' className={styles.content_name}>
                          {product.name}
                        </Typography>
                        <Typography>
                          ${product.price}
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
    </div >
  )
}
export default Home
