import React, { Component } from 'react'
import "./sidebar.css"

export class Sidebar extends Component {
    render() {
        return (
            <div className="serviceSideBar">
                 <div  className="serviceList">
                    <ul>
                        <li class="current"><a href="/">All Services</a></li>
                        <li><a href="/">Design & Engineering</a></li>
                        <li><a href="/">Fabrication</a></li>
                        <li><a href="/">Aluminium Welding</a></li>
                        <li ><a href="/">Stainless Steels & Exotic Material Welding</a></li>
                        <li><a href="/">Machining</a></li>
                        <li><a href="/">Water-jet Cutting & Profiling</a></li>
                        <li><a href="/">Hydraulics & Piping</a></li>
                        <li><a href="/">Rental Services</a></li>
                        <li><a href="/">Assembly & Testing</a></li>
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
