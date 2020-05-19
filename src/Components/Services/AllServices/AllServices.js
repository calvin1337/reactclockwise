import React, { Component } from 'react';
import {Row, Col} from "react-bootstrap";
import SingleService from './SingleService/SingleService';

export class AllServices extends Component {

    render() {

        return (
            <Row className="allservices">
                <Col md="4" sm="4">
                    <SingleService 
                    info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, debitis"
                    serviceImage="https://i.picsum.photos/id/493/200/300.jpg" 
                    title="Design & Engineering"
                    />
                </Col>
                <Col md="4" sm="4">
                    <SingleService 
                    info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, debitis"
                    serviceImage="https://i.picsum.photos/id/493/200/300.jpg" 
                    title="Fabrication"
                    />
                </Col>
                <Col md="4" sm="4">
                    <SingleService 
                    info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, debitis"
                    serviceImage="https://i.picsum.photos/id/493/200/300.jpg" 
                    title="Aluminum Welding"
                    />
                </Col>
                <div className="clearfix" style={spacer50}></div>
                <Col md="4" sm="4">
                    <SingleService 
                    info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, debitis"
                    serviceImage="https://i.picsum.photos/id/493/200/300.jpg"  
                    title="Stainless Steels & Exotic Material Welding"
                    />
                </Col>
                <Col md="4" sm="4">
                    <SingleService 
                    info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, debitis"
                    serviceImage="https://i.picsum.photos/id/493/200/300.jpg"
                    title="Machining" 
                    />
                </Col>
                <Col md="4" sm="4">
                    <SingleService 
                    info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, debitis"
                    serviceImage="https://i.picsum.photos/id/493/200/300.jpg" title="Water-jet Cutting & Profiling"
                    />
                </Col>
                <div className="clearfix" style={spacer50}></div>
                <Col md="4" sm="4">
                    <SingleService 
                    info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, debitis"
                    serviceImage="https://i.picsum.photos/id/493/200/300.jpg" 
                    title="Hydraulics & Piping"
                    />
                </Col>
                <Col md="4" sm="4">
                    <SingleService 
                    info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, debitis"
                    serviceImage="https://i.picsum.photos/id/493/200/300.jpg" 
                    title="Rental Services"
                    />
                </Col>
                <Col md="4" sm="4">
                    <SingleService 
                    info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, debitis"
                    serviceImage="https://i.picsum.photos/id/493/200/300.jpg" 
                    title="Assembly & Testing"
                    />
                </Col>
            </Row>
        )
    }
}

const spacer50 = {
    height: "50px",
    width:"100%"
}

export default AllServices
