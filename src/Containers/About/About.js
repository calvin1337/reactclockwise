import React, { Component } from 'react'
import Header from '../../Components/Header/Header'
import AboutIntro from '../../Components/Homepage/AboutIntro'
import Selector from '../../Components/About/Selector/Selector'

export class About extends Component {
    render() {
        return (
            <div>
                 <Header />
                  <Selector />
                 <AboutIntro />
                 
            </div>     
        )
    }
}

export default About
