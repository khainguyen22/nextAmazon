import type { NextPage } from 'next'
import { Container } from 'react-bootstrap'
import styles from '/styles/ladding.module.scss'
import Head from 'next/head'
import TopComponent from './TopComponent'
import SeviceComponent from './SeviceComponent'
import AboutComponent from './AboutComponent'
import DownloadComponent from './DownloadComponent'
import ContactComponent from './ContactComponent'
const LaddingPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Ladding Page</title>
            </Head>
            <div className={styles.backgound}></div>
            <div className={styles.texture}></div>
            <header className={styles.header}>

                <Container>
                    <TopComponent />
                </Container>
            </header>
            <main className={styles.main}>
                <Container>
                    <SeviceComponent />
                    <AboutComponent />
                    <DownloadComponent />
                </Container>
            </main>
            <footer className={styles.footer}>
                <Container>
                    <ContactComponent />
                </Container>
            </footer>
        </>
    )
}
export default LaddingPage
