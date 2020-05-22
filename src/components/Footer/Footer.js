import React from "react";
import { MDBContainer } from "mdbreact";

const Footer = () => {
  return (
    <div className="footer-copyright text-center py-3 green">
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a href="https://www.mdbootstrap.com"> COVID-19 PROJECT </a>
      </MDBContainer>
    </div>
  );
};

export default Footer;
