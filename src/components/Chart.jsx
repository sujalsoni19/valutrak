import React from "react";
import { Chart } from "react-google-charts";
import { useContext } from "react";
import { Coincontext } from "../context/Coincontext";

function Lchart({ historicaldata }) {
  
  const {currency} = useContext(Coincontext);
  const chartData = [
    ["Time", "Price"],
    ...historicaldata.prices.map(([timestamp, price]) => [
      new Date(timestamp), 
      price,
    ]),
  ];

  const options = {
    title: "Price History",
    curveType: "function",
    legend: "none",
    hAxis: {
      title: "Date",
      format: "dd MMM",
    },
    vAxis: {
      title: `Price: ${currency.name} (${currency.symbol})`,
      textStyle: { color: "#555" },
    },
    colors: ["#4f46e5"], 
  };

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="250px"
      data={chartData}
      options={options}
    />
  );
}

export default Lchart;
