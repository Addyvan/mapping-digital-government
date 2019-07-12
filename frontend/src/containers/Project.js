    
import React from "react";

class Project extends React.Component {
  render() {
    console.log(this.props.location.pathname);
    return(
      <div>
        PROJECT CONTAINER
      </div>
    );
  }
}

export default Project;