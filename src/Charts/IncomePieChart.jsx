import { useEffect, useState } from "react";
import { pieIncomeHelperFunc } from "../HelperFunctions/IncomeHelper";

function IncomePieChart({ incomeData: data }) {
  const [incomeData, setIncomeData] = useState("");

  const fetchIncomeData = async () => {
    const returnArray = pieIncomeHelperFunc(data);
    const year = 2023;

    setIncomeData(returnArray[year]);
  };

  useEffect(() => {
    data && fetchIncomeData();
  }, [data]);

  const incomePieChart = () => {
    const incomeChart =
      window.google.visualization.arrayToDataTable(incomeData);

    var options = {
      title: "Income per year per category",
      is3D: true,
    };

    const chart = new window.google.visualization.PieChart(
      document.getElementById("income-piechart")
    );

    chart.draw(incomeChart, options);
  };

  useEffect(() => {
    if (incomeData) {
      window.google.charts.setOnLoadCallback(incomePieChart);
    }
  }, [incomeData]);

  return <div id="income-piechart"></div>;
}

export default IncomePieChart;
