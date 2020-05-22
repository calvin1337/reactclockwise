import React, { Component } from 'react'
import {Row, Container} from "react-bootstrap"
import SingleProject from './SingleProject'
import Selector from '../Selector/Selector'

export class ProjectContainer extends Component {

    state = {
        Selected : "all"
    }

    AddClass = (element, name) => {
            var i, arr1, arr2;
            arr1 = element.className.split(" ");
            arr2 = name.split(" ");
            for (i = 0; i < arr2.length; i++) {
                if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
            }
      }
      
      RemoveClass = (element, name) => {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);     
            }
        }
            element.className = arr1.join(" ");
      }

      filterSelection = (c) => {
        this.setState({Selected: c},
            () => {
                this.filterSort(c)
        })

     }

     filterSort = (c) => {
        var x, i;
        x = document.getElementsByClassName("filter");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
          this.RemoveClass(x[i], "show");
          if (x[i].className.indexOf(c) > -1) this.AddClass(x[i], "show");
        }
     }
      
     componentDidMount(){
         this.filterSelection("all")
     }
      
    render() {
        return (
            <div>

            
            <Selector selected={this.state.Selected} filterSelector={(c) => this.filterSelection(c)} />

            <Container style={{marginTop:"50px"}}>
                <Row style={{margin: "auto"}}>

                    {/*Row 1*/}
                    <div className="filter welding">
                    <SingleProject />
                    </div>

                    <div className="filter engineering">
                    <SingleProject />
                    </div>

                    <div className="filter machining">
                    <SingleProject />
                    </div>

                    <div className="filter welding">
                    <SingleProject />
                    </div>
                   {/*Row 2*/}
                   <div className="filter welding">
                    <SingleProject />
                    </div>

                    <div className="filter engineering">
                    <SingleProject />
                    </div>

                    <div className="filter machining">
                    <SingleProject />
                    </div>

                    <div className="filter welding">
                    <SingleProject />
                    </div>
                   
                </Row>
            </Container>
            </div>
        )
    }
}

export default ProjectContainer
