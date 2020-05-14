import React, { Component } from 'react'
import {Col, Row, Container} from "react-bootstrap";
import styles from "./abouttext.module.css";

export class AboutText extends Component {
    render() {
        return (
            <Container style={{paddingTop: "50px", paddingBottom:"50px"}}>
                <div className={styles.titleContainerAbout}>
                    <span>Who Care!</span>
                    <h2>Unbeaten Service</h2>
                    </div>
                <Row>
                
                    <Col md="6">
                    <div className={styles.imgHolder}>
                        <img src="https://images.unsplash.com/photo-1531053326607-9d349096d887?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="welder" />
                    </div>
                    </Col>
                    <Col md="6">
                    <div className={styles.textHolder}>
                     <div className={styles.aboutInfo}>
                            <p>We completely conscious of the need to adjust or services as our customer’s needs change too and our customers success if pivotal on our own.</p>
                            <p>Providing a huge emphasis on relationships, Clockwise will always be there to assist, support and supply our customer’s whenever they ask. </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque quam repellat optio hic a provident saepe, perferendis excepturi corrupti vero neque quae laudantium rerum illo dicta minima explicabo nobis?</p>
                            </div>
                    </div>
                    </Col>            
                </Row>
            </Container>
        )
    }
}

export default AboutText
