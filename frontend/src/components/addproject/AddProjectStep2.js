import React from "react";

import PropTypes from "prop-types";

import {
  Row,
  Col,
  Button
} from "reactstrap";

class AddProjectStep2 extends React.Component {
  render() {
    return(
      <>
        <Row>
          <Col md="9" />
          <Col md="3">
          </Col>
        </Row>
      </>
    );
  }
}

AddProjectStep2.propTypes = {
  continueAction: PropTypes.func,
  projectId: PropTypes.string
}

export default AddProjectStep2;