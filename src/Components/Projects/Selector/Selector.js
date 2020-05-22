import React, { Component } from 'react'
import "./selector.css"
export class Selector extends Component {
    render() {
        return (
                <div className="ProjectsList">
                    <ul className="list">
                        <li className="active"> All </li>
                        <li>Welding</li>
                        <li>Machining</li>
                        <li>Enginering</li>
                     </ul>
                </div>
        )
    }
}

export default Selector
