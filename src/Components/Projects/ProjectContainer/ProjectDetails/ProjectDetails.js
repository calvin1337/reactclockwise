import React, { Component } from 'react'


export class ProjectDetails extends Component {

    componentDidMount() {
        const postId = this.props.match.params.id
        console.log(postId)
      }

    render() {

        return (
            <div style={{height:"500px"}}>
                <h3>Testing</h3>
                
            </div>
        )
    }
}

export default ProjectDetails
