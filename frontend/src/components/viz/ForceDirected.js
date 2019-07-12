import React from "react";
import * as d3 from "d3";
import PropTypes from "prop-types";

class ForceDirected extends React.Component {
  constructor(props) {
    super(props);

    this.createGraph = this.createGraph.bind(this);
  }

  //  https://bl.ocks.org/heybignick/3faf257bbbbc7743bb72310d03b86ee8 OR DIFFERENT ONE
  createGraph() {
    console.log("Use props to create graph");
    return null;
  }

  render() {
    
    const data = this.createGraph();

    return(
      <svg id={"force-" + this.props.id}>
        {
          (data) ? data : ""
        }
      </svg>
    );
  }

}

ForceDirected.propTypes = {
  id: PropTypes.string
}

export default ForceDirected;