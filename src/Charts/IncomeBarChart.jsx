import { useEffect, useState } from "react";
import { incomeHelperFunc } from "../HelperFunctions/IncomeHelper";

function IncomeBarChart({ incomeData: data }) {
  const [incomeData, setIncomeData] = useState("");

  const fetchIncomeData = async () => {
    const returnArray = incomeHelperFunc(data);
    setIncomeData(returnArray);
  };
  useEffect(() => {
    data && fetchIncomeData();
  }, [data]);

  const incomeHistogram = () => {
    const incomeChart =
      window.google.visualization.arrayToDataTable(incomeData);

    var options = {
      title: "Income per month per category",
      vAxis: {
        title: "Income amount",
      },
      hAxis: {
        title: "Per month categories",
      },
    };

    const chart = new window.google.visualization.ColumnChart(
      document.getElementById("income-chart")
    );

    chart.draw(incomeChart, options);
  };

  useEffect(() => {
    if (incomeData) {
      window.google.charts.setOnLoadCallback(incomeHistogram);
    }
  }, [incomeData]);

  return <div id="income-chart"></div>;
}

export default IncomeBarChart;
