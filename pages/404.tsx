import { Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import NextLink from 'next/link'
import styles from "../styles/404.module.scss"
const Custom404 = () => {
    return (
        <>
            <Head>
                <title>Page Not Found</title>
            </Head>
            <Container className={styles.page_404}>
                <Grid container spacing={1}>
                    <Grid item md={12} xs={12}>
                        <Typography className={styles.four_zero_four_bg}>
                            <Typography component="h2" variant='h2'>404</Typography>
                        </Typography>
                        <Typography className="col-sm-10 col-sm-offset-1  text-center">
                            <Typography className={styles.contant_box_404}>
                                {/* <Typography component="h3" variant='h3'>Look like you're lost</Typography>
                                <Typography>the page you are looking for not avaible!</Typography> */}
                                <Typography className={styles.link_404}>
                                    <NextLink href='/'>
                                        Go to Home
                                    </NextLink>
                                </Typography>
                            </Typography>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default Custom404