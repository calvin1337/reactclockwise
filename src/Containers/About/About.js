import React, { Component } from 'react'
import Header from '../../Components/Header/Header'
import AboutIntro from '../../Components/Homepage/AboutIntro'
import Selector from '../../Components/About/Selector/Selector'

export class About extends Component {
    state = {
        activepage: "about"
    }

    pageSelector = (testing) => {
            this.setState({activepage: testing})
    }

    render() {
        return (
            <div>
                 <Header />
                  <Selector activepage={this.state.activepage} currentpage={(testing) => this.pageSelector(testing)} />
                 <AboutIntro />
                 
            </div>     
        )
    }
}

export default About
