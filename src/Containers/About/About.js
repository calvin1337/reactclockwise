import React, { Component } from 'react'
import Header from '../../Components/Header/Header'

import Selector from '../../Components/About/Selector/Selector'
import AboutContainer from '../../Components/About/Content/AboutContainer'

export class About extends Component {
    state = {
        activepage: "about"
    }

    pageSelector = (testing) => {
            this.setState({activepage: testing})
    }

    render() {
        let currentPage = ""
        if(this.state.activepage === "about"){
            currentPage = <AboutContainer />
        }

        if(this.state.activepage === "facilities"){
            currentPage = <h1 style={{color:"black"}}>Facilities</h1>
        }

        return (

            <div>
                 <Header />
                  <Selector activepage={this.state.activepage} currentpage={(testing) => this.pageSelector(testing)} />
                    {currentPage}
                 
                 
            </div>     
        )
    }
}

export default About