import { NextPage } from 'next'
import React, { useContext } from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import { AppBar, Button, Container, CssBaseline, Link, ThemeProvider, Toolbar, Typography } from '@mui/material'
import styles from "../styles/Amazon.module.scss";

export default function Layout({ title, description, children }) {
    return (
        <div>
            <Head>
                <title>{title ? `Next Amazona / ${title}` : `Next Amazona`}</title>
                {description && <meta name='description' content={description}></meta>}
            </Head>
            <AppBar position="static" className={styles.navbar}>

                <Toolbar className={styles.container}>
                    <NextLink href='/' passHref>
                        <Link className={styles.link_brand}>
                            <Typography className={styles.brand}>Amazon</Typography>
                        </Link>
                    </NextLink>
                    <div className={styles.grow}></div>
                    <NextLink href='/card' passHref>
                        <Link className={styles.link_card}>
                            <Typography className={styles.card}>Card</Typography>
                        </Link>
                    </NextLink>
                    <NextLink href='/login' passHref>
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
                    ddd
                </Container>
                <Typography>
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

