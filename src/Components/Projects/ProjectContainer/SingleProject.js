import React, { Component } from 'react'
import "./projects.css"

export class SingleProject extends Component {
    render() {
        return (
            <div class="filter-item" >
                <div class="single-project-item">
                    <div class="img-holder">
                    <img src={this.props.projectImage} alt="Project Image" />
                    <div class="overlay-style-one">
                        <div class="box">
                        <div class="content">
                            <button>View Project</button>
                            <div class="text-holder">
                            <h4>{this.props.projectName}</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default SingleProject
