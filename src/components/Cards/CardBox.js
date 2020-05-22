import React from "react";
import { MDBRow, MDBContainer } from "mdbreact";
import CountryCards from "./Components/Cards";

function CardBox({ getSummary }) {
  return (
    <MDBContainer className="mb-4 mt-3">
      <MDBRow xl={8} lg={8}>
        {getSummary.Countries
          ? getSummary.Countries.map((country, index) => {
              return <CountryCards country={country} key={index} />;
            })
          : null}
      </MDBRow>
    </MDBContainer>
  );
}

export default CardBox;
