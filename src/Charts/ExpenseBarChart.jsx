import React, { useEffect, useState } from "react";
import { expenseHelperFunc } from "../HelperFunctions/ExpenseHelperFunctions";

function ExpenseBarChart({ expenseData: data }) {
  const [expenseData, setExpenseData] = useState("");

  const fetchExpenseData = async () => {
    const returnArray = expenseHelperFunc(data);
    setExpenseData(returnArray);
  };
  useEffect(() => {
    data && fetchExpenseData();
  }, [data]);

  const expenseHistogram = () => {
    const expenseChart =
      window.google.visualization.arrayToDataTable(expenseData);

    var options = {
      title: "Expense per month per category",
      vAxis: {
        title: "Expense amount",
      },
      hAxis: {
        title: "Per month categories",
      },
    };

    const chart = new window.google.visualization.ColumnChart(
      document.getElementById("expense-chart")
    );

    chart.draw(expenseChart, options);
  };

  useEffect(() => {
    if (expenseData) {
      window.google.charts.setOnLoadCallback(expenseHistogram);
    }
  }, [expenseData]);

  return <div id="expense-chart"></div>;
}

export default ExpenseBarChart;
