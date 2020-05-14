import React, { Component } from 'react'
import {Col, Row, Container} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./counter.css"
import {faBriefcase, faSmile, faUser} from "@fortawesome/free-solid-svg-icons";

export class CounterContainer extends Component {

    componentDidMount() {
        this.counter()
    }
        
    counter = () => {
        const counters = document.querySelectorAll('.counter');
        
		
		console.log(counters)
		
    }


    render() {

       


        return (
            <div className="parallax">
                
                <Container style={{paddingTop:"80px"}}>
                <div className="section-headline-white">
                 <h2>Counter</h2>
                </div>
                <Row>
                    <Col md="4" className="mb-4">
                        <Row>
                            <div className="col-6 pr-0">
                            <h4 className="display-4 text-right mb-0 counter" data-target="42">0</h4>
                            </div>
                            <div className="col-6">
                            <p className="text-uppercase font-weight-normal mb-1">Projects</p>
                            <FontAwesomeIcon size="2x" icon={faBriefcase}></FontAwesomeIcon>
                            </div>
                        </Row>
                    </Col>
                    <Col md="4" className="mb-4">
                        <Row>
                            <div className="col-6 pr-0">
                            <h4 className="display-4 text-right mb-0 counter" data-target="42">0</h4>
                            </div>
                            <div className="col-6">
                            <p class="text-uppercase font-weight-normal mb-1">Customers</p>
                            <FontAwesomeIcon size="2x" icon={faUser}></FontAwesomeIcon>
                            </div>
                        </Row>
                    </Col>
                    <Col md="4" className="mb-4">
                        <Row>
                            <div className="col-6 pr-0">
                            <h4 className="display-4 text-right mb-0"> 
                            <span className="d-flex justify-content-end">
                                <span class="counter" data-target="100">0</span> %</span></h4>
                            </div>
                            <div className="col-6">
                            <p className="text-uppercase font-weight-normal mb-1">Satisfaction</p>
                            <FontAwesomeIcon size="2x" icon={faSmile}></FontAwesomeIcon>
                            </div>
                        </Row>
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}

export default CounterContainer
