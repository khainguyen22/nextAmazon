import React, { ReactNode } from "react";
import NextLink from 'next/link'
import { AppBar, Container, Link, Toolbar, Grid, Typography } from '@mui/material'
import styles from "../styles/Amazon.module.scss"
import Head from "next/head";
interface Props {
    children?: ReactNode
    title?: ReactNode
}
export default function Layout({ children, title }: Props) {
    return (
        <div>
            <Head>
                <title>Next Amazona {title ? `/ ${title}` : ''}</title>
            </Head>
            <AppBar position="static" className={styles.navbar}>
                <Toolbar className={styles.container}>
                    <NextLink href='/' passHref>
                        <Link className={styles.link_brand}>
                            <Typography className={styles.brand}>Amazon</Typography>
                        </Link>
                    </NextLink>
                    <div className={styles.grow}></div>
                    <>
                        <NextLink href='/' passHref>
                            <Link>
                                <Typography>Home</Typography>
                            </Link>
                        </NextLink>
                        <NextLink href='/post' passHref>
                            <Link>
                                <Typography>Posts</Typography>
                            </Link>
                        </NextLink>
                        <NextLink href='/' passHref>
                            <Link>
                                <Typography>Category</Typography>
                            </Link>
                        </NextLink>
                        <NextLink href='/' passHref>
                            <Link>
                                <Typography>Blog</Typography>
                            </Link>
                        </NextLink>
                        <NextLink href='/' passHref>
                            <Link>
                                <Typography>Contact Us</Typography>
                            </Link>
                        </NextLink>
                    </>
                    <div className={styles.grow}></div>
                    <NextLink href='/card/mycard' passHref>
                        <Link className={styles.link_card}>
                            <Typography className={styles.card}>Card</Typography>
                        </Link>
                    </NextLink>
                    <NextLink href='/account/login' passHref>
                        <Link className={styles.link_login}>
                            <Typography className={styles.login}>Login</Typography>
                        </Link>
                    </NextLink>
                </Toolbar>
            </AppBar>
            <Container className={styles.main}>
                {children}
            </Container>
            <footer className={styles.footer}>
                <Container>
                    <Grid container spacing={1}>
                        <Grid item md={6} xs={12}>
                            <NextLink href='/' passHref>
                                <Link>
                                    <Typography component="h4" variant='h4'>Amazon</Typography>
                                </Link>
                            </NextLink>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            2
                        </Grid>
                        <Grid item md={3} xs={12}>
                            3
                        </Grid>
                    </Grid>
                </Container>
                <Typography className={styles.footer_copyright} >
                    @ All rights reserved.
                    <NextLink href="/">
                        <Link>
                            Next Amazon.
                        </Link>
                    </NextLink>
                </Typography>
            </footer>
        </div >
    )
}

