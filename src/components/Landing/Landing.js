import React, { useEffect, useState } from "react";
import { Container } from "mdbreact";
import OverViewGraph from "../Graphs/Overview";
import CovidApi from "../AxiosInstance/CovidApi";

function Landing() {
  const [getCountries, setCountries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      const res = await CovidApi().get("/summary");
      const countryFilter = res.data.Countries.filter((country) => {
        return (
          country.Country === "United States of America" ||
          country.Country === "France" ||
          country.Country === "Mexico" ||
          country.Country === "Canada" ||
          country.Country === "Spain" ||
          country.Country === "Australia" ||
          country.Country === "Brazil" ||
          country.Country === "Germany" ||
          country.Country === "Russian Federation"
        );
      });
      const countryData = countryFilter.map((country) => {
        return { y: country.TotalConfirmed, label: country.Country };
      });
      setCountries(countryData);
    };
    fetchCountries();
  }, []);
  return (
    <Container className="m-5 mx-auto">
      <OverViewGraph getCountries={getCountries} />
    </Container>
  );
}

export default Landing;
