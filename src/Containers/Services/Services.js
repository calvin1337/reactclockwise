import React, { Component } from 'react'
import {Col, Row, Container} from "react-bootstrap"
import Sidebar from '../../Components/Services/Sidebar/Sidebar'
import Header from '../../Components/Header/Header'


export class Services extends Component {
    render() {
        return (
            <React.Fragment>
            <Header />
            <div style={{paddingTop: "50px", paddingBottom:"50px"}} >
                <Container style={{paddingTop: "50px"}}>
                    <Row>
                        <Col md="3">
                            <Sidebar />
                        </Col>
                        <Col md="9">

                        </Col>
                    </Row>
                </Container>
            </div>
            </React.Fragment>
        )
    }
}

export default Services
