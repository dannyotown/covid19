import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

const CountryCards = ({ country }) => {
  return (
    <MDBCol md="4" className="mt-4">
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>{country.Country}</MDBCardTitle>
          <hr />
          <MDBCardText>
            Total Confirmed: {country.TotalConfirmed} <br />
            Total Recovered: {country.TotalRecovered} <br />
            Total Deaths: {country.TotalDeaths}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default CountryCards;
