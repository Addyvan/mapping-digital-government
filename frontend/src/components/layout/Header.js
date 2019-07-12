import React from "react";

import {
  Row,
  Col
} from "reactstrap";

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';

class Header extends React.Component {

  render() {
    return(
      <Row style={{marginBottom: "15px", marginTop: "0px"}}>
        <Col md="12" lg="12">
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Derek Bot 5000</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/onboard">Add Project</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/addyvan/mapping-digital-government">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </Col>
      </Row>
    );
  }
}

export default Header;