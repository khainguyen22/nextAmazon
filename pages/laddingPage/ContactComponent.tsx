import type { NextPage } from 'next'
import { Row, Col } from 'react-bootstrap'
import styles from '/styles/ladding.module.scss'
const ContactComponent: NextPage = () => {
    return (
        <div className={styles.ladding_page_contact}>
            <Row>
                <Col xs={12} md={6} col={6}>
                    <h2>FOODO</h2>
                    {/* <p>Some quick example text to build on the card title and make up the bulk of the card's content</p> */}
                </Col>
                <Col xs={12} md={3} col={3}>
                    <h5>Link</h5>
                    <ul>
                        <li> <a href="#">Overview</a></li>
                        <li> <a href="#">Social Media</a></li>
                        <li> <a href="#">Contact</a></li>
                    </ul>
                </Col>
                <Col xs={12} md={3} col={3}>

                    <h5>Company</h5>
                    <ul>
                        <li> <a href="#">Overview</a></li>
                        <li> <a href="#">Social Media</a></li>
                        <li> <a href="#">Contact</a></li>
                    </ul>
                </Col>
            </Row>
        </div>
    )
}
export default ContactComponent
