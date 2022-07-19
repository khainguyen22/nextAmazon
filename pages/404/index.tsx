import Head from 'next/head'
import NextLink from 'next/link'
import styles from "../../styles/404.module.scss"
const Custom404 = () => {
    return (
        <section className={styles.page_404}>
            <Head>
                <title>Page Not Found</title>
            </Head>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div className={styles.four_zero_four_bg}>
                                <h2 className="text-center ">404</h2>
                            </div>
                            <div className={styles.contant_box_404}>
                                {/* <h3>Look like you're lost</h3>
                                <p>the page you are looking for not avaible!</p> */}
                                <div className={styles.link_404}>
                                    <NextLink href='/'>
                                        Go to Home
                                    </NextLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Custom404