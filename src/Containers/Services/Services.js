import React, { Component } from 'react'
import {Col, Row, Container} from "react-bootstrap"
import Sidebar from '../../Components/Services/Sidebar/Sidebar'
import Header from '../../Components/Header/Header'
import AllServices from '../../Components/Services/AllServices/AllServices'


export class Services extends Component {
    
    state = {
        activepage : "allservices"
    }

    pageSelector = (page) => {
        this.setState({activepage: page})
    }

    
    render() {
        return (
            <React.Fragment>
            <Header />
            <div style={{paddingTop: "50px", paddingBottom:"50px"}} >
                <Container style={{paddingTop: "50px"}}>
                    <Row>
                        <Col md="3">
                            <Sidebar currentpage={(page) => this.pageSelector(page)}/>
                        </Col>
                        <Col md="9">
                            <AllServices currentpage={(page) => this.pageSelector(page)} />
                        </Col>
                    </Row>
                </Container>
            </div>
            </React.Fragment>
        )
    }
}

export default Services
