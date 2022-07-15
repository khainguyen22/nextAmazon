import { Card, CardMedia, Grid, CardActionArea, CardContent, Typography, CardActions, Button } from '@mui/material'
import type { NextPage } from 'next'
import NextLink from 'next/link'
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import Layout from '../components/Layout'
import { products } from '../untils/data'
import styles from "../styles/Amazon.module.scss";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Image from 'next/image'
export const config = { amp: false }
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

const Home: NextPage = () => {
  return (
    <div>
      <Layout title="Home">
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
