import React, { useState, useEffect } from "react";
import NavbarPage from "./components/Nav/NavBar";
import Landing from "./components/Landing/Landing";
import CardBox from "./components/Cards/CardBox";
import CovidApi from "./components/AxiosInstance/CovidApi";
import Footer from "./components/Footer/Footer";

function App() {
  const [getSummary, setSummary] = useState([]);
  useEffect(() => {
    const fetchSummary = async () => {
      const res = await CovidApi().get("/summary");
      setSummary(res.data);
    };
    fetchSummary();
  }, []);
  return (
    <>
      <NavbarPage />
      <Landing />
      <CardBox getSummary={getSummary} />
      <Footer />
    </>
  );
}

export default App;
