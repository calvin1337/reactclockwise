import React, { Component } from 'react'
import "./services.css"

export class WaterJet extends Component {
    render() {
        return (
            <div className="servicesContent">
            <div className="singleServiceImage">
              <img 
              src="http://www.themechampion.com/demo/industriallive/wp-content/uploads/2017/02/Oil_01.jpg" alt=""
              height="315" 
              width="800" />
            </div>
            <div className="servicesTitle">
                <h2 className="serviceHeader">Water-Jet Cutting And Profiling</h2>
            </div>
        </div>
        )
    }
}

export default WaterJet
