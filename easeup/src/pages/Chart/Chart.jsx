import React, { PureComponent } from "react";
import "./chart.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Chart = ({ chartData }) => {
  return (
    <>
      <div className="admin-chart-mainContainer">
        <div className="chart-head">Sales Analytics</div>
        <div className="admin-mainChartDiv">
          <Line data={chartData} className="admin-mainChart" />
        </div>
      </div>
    </>
  );
};

export default Chart;
