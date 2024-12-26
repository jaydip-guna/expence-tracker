import CanvasJSReact from "@canvasjs/react-charts";
import React from "react";
import { useFilters } from "../../hooks/useFilter";
// import { useFilters } from "../../hooks/useFilter";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function getDataPoints(filteredTransactions) {
  let dataPoints = {};

  for (const value of filteredTransactions) {
    if (dataPoints[value.category]) {
      dataPoints[value.category] = {
        y: dataPoints[value.category].y + Number(value.amount),
        label: value.category,
      };
    } else {
      dataPoints[value.category] = {
        y: Number(value.amount),
        label: value.category,
      };
    }
  }

  return Object.values(dataPoints);
}

function MyChart() {
  const { filteredTransactions, Filters } = useFilters();

  const dataPoints = getDataPoints(filteredTransactions);

  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Monthly Expenses",
    },
    data: [
      {
        type: "pie",
        startAngle: 75,
        toolTipContent: `<b>{label}</b>: ₹{y}`,
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - ₹{y}",
        dataPoints,
      },
    ],
  };

  return (
    <div>
      <Filters />
      <CanvasJSChart options={options} />
    </div>
  );
}

export default MyChart;
