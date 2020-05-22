import React, { Component } from 'react'
import {Row, Container} from "react-bootstrap"
import SingleProject from './SingleProject'
import Selector from '../Selector/Selector'

export class ProjectContainer extends Component {

    state = {
        Selected : "all"
    }

    AddClass = (element, name) => {
        
      }
      
      RemoveClass = (element, name) => {
        
      }

      filterSelection = (c) => {
          var x, i
        x = document.getElementsByClassName("filter-item");
        this.setState({Selected: c},
            () => {
                console.log(x)
        })

     }

      
      
    render() {
        return (
            <div>

            
            <Selector selected={this.state.Selected} filterSelector={(c) => this.filterSelection(c)} />

            <Container style={{marginTop:"50px"}}>
                <Row style={{margin: "auto"}}>
                    <SingleProject />
                    <SingleProject />
                    <SingleProject />
                    <SingleProject />
                </Row>
            </Container>
            </div>
        )
    }
}

export default ProjectContainer
