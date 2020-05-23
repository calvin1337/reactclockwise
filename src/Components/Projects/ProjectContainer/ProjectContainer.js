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

            <Container style={{marginTop:"50px", marginBottom:"50px"}}>
                <Row style={{margin: "auto"}}>

                    {/*Row 1*/}
                    <div className="filter welding">
                    <SingleProject 
                    projectImage="https://web.archive.org/web/20161016114423/http://aluweldltd.co.uk/images/P1040446.JPG"
                    projectName="TDU Frame"
                    />
                    </div>

                    <div className="filter engineering">
                    <SingleProject
                     projectImage="https://web.archive.org/web/20161016175139/http://aluweldltd.co.uk/images/PA300187.JPG"
                     projectName="Debri Cap"
                     />
                    </div>

                    <div className="filter machining">
                    <SingleProject 
                     projectImage="https://web.archive.org/web/20170103021940/http://aluweldltd.co.uk/images/Tooling%20BaskeT_LARGE1.jpg"
                     projectName="Tooling Basket"
                    />
                    </div>

                    <div className="filter welding">
                    <SingleProject 
                     projectImage="https://web.archive.org/web/20170102213454/http://aluweldltd.co.uk/images/HPU%20Skid%20(Medium).JPG"
                     projectName="HPU Skid"
                    />
                    </div>
                   {/*Row 2*/}
                   <div className="filter welding">
                    <SingleProject 
                     projectImage="https://web.archive.org/web/20170103033844/http://aluweldltd.co.uk/images/PA130365.JPG"
                     projectName="Spacer Frame"
                    />
                    </div>

                    <div className="filter engineering">
                    <SingleProject 
                     projectImage="https://web.archive.org/web/20170102220447/http://aluweldltd.co.uk/images/Divers%20Skid_large.jpg"
                     projectName="Divers Skid"
                    />
                    </div>

                    <div className="filter machining">
                    <SingleProject 
                     projectImage="https://web.archive.org/web/20170103002915/http://aluweldltd.co.uk/images/ROV%20SKID_large.JPG"
                     projectName="ROV Skid"
                    />
                    </div>

                    <div className="filter welding">
                    <SingleProject 
                     projectImage="https://web.archive.org/web/20170102233908/http://aluweldltd.co.uk/images/Cable%20Cutter%20Stand%20for%20Oil%20Exhibition_large.jpg"
                     projectName="Cable Cutter Stand"
                    />
                    </div>

                    
                   
                </Row>
            </Container>
            </div>
        )
    }
}

export default ProjectContainer
