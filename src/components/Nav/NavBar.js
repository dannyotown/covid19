import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class NavbarPage extends Component {
  render() {
    return (
      <Router>
        <MDBNavbar color="green" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text">COVID-19 Project</strong>
          </MDBNavbarBrand>
        </MDBNavbar>
      </Router>
    );
  }
}

export default NavbarPage;
