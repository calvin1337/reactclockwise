import React, { Component } from 'react'
import "./sidebar.css"

export class Sidebar extends Component {
    render() {
        return (
            <div className="serviceSideBar">
                 <div  className="serviceList">
                    <ul>
                        <li class="current"><button onClick={() => this.props.currentpage()}>All Services</button></li>
                        <li><button onClick={() => this.props.currentpage("designAndEngineering")}>Design & Engineering</button></li>
                        <li><button onClick={() => this.props.currentpage("fabrication")}>Fabrication</button></li>
                        <li><button onClick={() => this.props.currentpage("aluminumWelding")}>Aluminium Welding</button></li>
                        <li><button onClick={() => this.props.currentpage("stainlessWelding")}>Stainless Steels & Exotic Material Welding</button></li>
                        <li><button onClick={() => this.props.currentpage("machining")}>Machining</button></li>
                        <li><button onClick={() => this.props.currentpage("waterjetCuttingAndProfiling")}>Water-jet Cutting & Profiling</button></li>
                        <li><button onClick={() => this.props.currentpage("hydraulicsAndPiping")}>Hydraulics & Piping</button></li>
                        <li><button onClick={() => this.props.currentpage("rental")}>Rental Services</button></li>
                        <li><button onClick={() => this.props.currentpage("assemblyAndTesting")}>Assembly & Testing</button></li>
                    </ul>
                </div>
                <div className="ServiceLinks">
                    <ul>
                        <li><a href="/">Current Vacancies</a></li>
                        <li><a href="/">QSHE</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar
