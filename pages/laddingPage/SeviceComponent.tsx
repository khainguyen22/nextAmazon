import type { NextPage } from 'next'
import Image from 'next/image'
import { Row, Col, Card } from 'react-bootstrap'
import styles from '/styles/ladding.module.scss'
const SeviceComponent: NextPage = () => {
    return (
        <div className={styles.ladding_page_sevice}>
            <Row className={styles.row}>
                <Col xs={12} md={4} col={4} className={styles.col}>
                    <Card className={styles.card}>
                        <Image src="../assets/image-one.png" alt="One" layout='fill' />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        </div>
                    </Card>
                </Col>
                <Col xs={12} md={4} col={4} className={styles.col}>
                    <Card className={styles.card}>
                        <Image src="../assets/image-two.png" alt="two" layout='fill' />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        </div>
                    </Card>
                </Col>
                <Col xs={12} md={4} col={4} className={styles.col}>
                    <Card className={styles.card}>
                        <Image src="../assets/image-three.png" alt="three" layout='fill' />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default SeviceComponent
