import React from "react";
import CanvasJSReact from "../../canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function OverViewGraph({ getCountries }) {
  const options = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Confirmed COVID-19 Cases",
    },
    axisX: {
      title: "Country",
      reversed: true,
    },
    axisY: {
      title: "Amount of Confirmed Cases",
      labelFontSize: 20,
    },
    data: [
      {
        type: "bar",
        dataPoints: getCountries,
      },
    ],
  };
  return <CanvasJSChart options={options} />;
}

export default OverViewGraph;
