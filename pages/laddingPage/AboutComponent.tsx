import type { NextPage } from 'next'
import Image from 'next/image'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import styles from '/styles/ladding.module.scss'
const AboutComponent: NextPage = () => {
    return (
        <div className={styles.ladding_page_about}>
            <Container className={styles.container}>
                <Row className={styles.row}>
                    <Col xs={12} md={6} col={6} className={styles.col}>
                        <Image src="../assets/image-about.png" alt="about" layout='fill' />
                    </Col>
                    <Col xs={12} md={6} col={6} className={styles.col}>
                        <Card className={styles.card}>
                            <h2>FOODO</h2>
                            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</p> */}
                            <Button className={styles.btn_start}>View Website</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default AboutComponent
