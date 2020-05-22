import React, { Component } from 'react'
import Header from '../../Components/Header/Header'
import Selector from '../../Components/Projects/Selector/Selector'

export class Projects extends Component {
    render() {
        return (
            <div>
                <Header 
                headerTitle="Our Projects"
                />
                <Selector />
            </div>
        )
    }
}

export default Projects
