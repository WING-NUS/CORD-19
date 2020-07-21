import Plot from "react-plotly.js";
import Header from "./Header";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  HeatMapComponent,
  Inject,
  Legend,
  Tooltip
} from "@syncfusion/ej2-react-heatmap";
// import Plot from "react-plotly.js";

const CompareMain = () => {
  const heatmapData = [
    [3, 5, 2, 0, 1, 5],
    [2, 0, 2, 1, 1, 7],
    [14, 6, 7, 9, 9, 3],
    [7, 6, 7, 7, 8, 6],
    [1, 5, 3, 3, 3, 9]
  ];

  return (
    <div>
      <div className="App-header">
        <Header />
      </div>
      <div className="articles">
        <HeatMapComponent
          id="heatmap"
          titleSettings={{
            text: "Risk Factor VS time",
            textStyle: {
              size: "15px",
              fontWeight: "500",
              fontStyle: "bold",
              fontFamily: "Segoe UI"
            }
          }}
          xAxis={{
            labels: [
              "Heart Disease",
              "Diabetes",
              "Smoking Status",
              "Cancer",
              "Age"
            ]
          }}
          yAxis={{
            labels: [
              "Feb 2020",
              "Mar 2020",
              "Apr 2020",
              "May 2020",
              "Jun 2020",
              "JUl 2020"
            ]
          }}
          dataSource={heatmapData}
          legendSettings={{
            visible: true,
            position: "Right",
            showLabel: true,
            height: "150"
          }}
        >
          <Inject services={[Legend, Tooltip]} />
        </HeatMapComponent>
      </div>
    </div>
  );
};

export default CompareMain;
