import React, { Component } from 'react'
import {Container} from "react-bootstrap"

export class ClockwiseMap extends Component {
    render() {
        return (
            <Container fluid>
                <section className="mb-4">
                <div id="full-width-map" class="z-depth-1-half map-container" style="height: 500px">
                <iframe src="https://maps.google.com/maps?q=clockwise%20technolog&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
                </section>
            </Container>
        )
    }
}

export default ClockwiseMap
