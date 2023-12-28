import { useEffect, useState } from "react";
import { pieExpenseHelperFunc } from "../HelperFunctions/ExpenseHelperFunctions";

function ExpensePieChart({ expenseData: data }) {
  const [expenseData, setExpenseData] = useState("");

  const fetchExpenseData = async () => {
    const returnArray = pieExpenseHelperFunc(data);
    const year = 2023;

    setExpenseData(returnArray[year]);
  };

  useEffect(() => {
    if (data) fetchExpenseData();
  }, [data]);

  const expensePieChart = () => {
    const expenseChart =
      window.google.visualization.arrayToDataTable(expenseData);

    var options = {
      title: "Expense per year per category",
      is3D: true,
    };

    const chart = new window.google.visualization.PieChart(
      document.getElementById("expense-piechart")
    );

    chart.draw(expenseChart, options);
  };

  useEffect(() => {
    if (expenseData) {
      window.google.charts.setOnLoadCallback(expensePieChart);
    }
  }, [expenseData]);

  return <div id="expense-piechart"></div>;
}

export default ExpensePieChart;
