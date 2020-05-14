import React, { Component } from 'react'
import "./selector.css"

export class Selector extends Component {
    render() {
        return (
            <div className="linkContainer">
            <div className="testing">
                <ul>
                    <li class="pageItem activebtn">
                      <button  href="/">About us</button>
                    </li>
                    <li>
                        //
                    </li>

                 <li class="pageItem">
                <button href="/">Facilites</button>
                </li>
                </ul>
  </div>
</div>
        )
    }
}

export default Selector
