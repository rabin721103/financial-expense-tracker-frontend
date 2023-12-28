import { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";
import { Card, Col, Row, Container } from "reactstrap";
import ExpensePieChart from "../Charts/ExpensePieChart";
import IncomePieChart from "../Charts/IncomePieChart";
import { useQuery } from "@tanstack/react-query";
import { getTotalExpense, getTotalIncome } from "../services/starWarsCharater";
import IncomeBarChart from "../Charts/IncomeBarChart";
import ExpenseBarChart from "../Charts/ExpenseBarChart";
import { Balance } from "../HelperFunctions/BalanceCheck";

function FrontPage() {
  const income = useQuery({
    queryKey: ["getTotalIncome"],
    queryFn: () => getTotalIncome(),
  });

  const expense = useQuery({
    queryKey: ["getTotalExpense"],
    queryFn: () => getTotalExpense(),
  });

  const [chartsLoaded, setChartsLoaded] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const [expenseData, setExpenseData] = useState("");
  const [incomeData, setIncomeData] = useState("");

  const getData = async () => {
    const expenseRes = await axiosInstance.get("expenses/expenseData");
    setExpenseData(expenseRes?.data?.response);

    const incomeRes = await axiosInstance.get("incomes/incomeData");
    setIncomeData(incomeRes?.data?.response);
  };
  useEffect(() => {
    if (!window.google.visualization) {
      window.google.charts.load("current", { packages: ["corechart"] });
    }
    window.google.charts.setOnLoadCallback(() => {
      setChartsLoaded(true);
    });

    getData();
  }, []);

  const balance = Balance();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="container">
            <h2>
              <b>Hello {user?.userName} !!!</b>
            </h2>
            <p>Here is your Financial Insights</p>
            <div
              style={{
                display: "flex",
                flexWrap: "nowrap",
              }}
            >
              <div className="col-md-4 shadow-lg p-2 my-5 mx-3 bg-body rounded">
                <button
                  className="btn btn-outline-secondary"
                  style={{ width: "100%" }}
                >
                  <i className="fa fa-sack-dollar"></i>
                  Total Income:
                  <h5>Rs. {income?.data?.data?.response}</h5>
                </button>
              </div>
              <div className="col-md-3 shadow-lg p-2 my-5 mx-3 bg-body rounded">
                <button
                  className="btn btn-outline-secondary"
                  style={{ width: "100%" }}
                >
                  <i className="fa fa-sack-dollar "></i>
                  Total Expense:
                  <h5>Rs. {expense?.data?.data?.response}</h5>
                </button>
              </div>
              <div className="col-md-3 shadow-lg p-2 my-5 bg-body rounded">
                <button
                  className="btn btn-outline-secondary"
                  style={{ width: "100%" }}
                >
                  <i className="fa fa-sack-dollar "></i>
                  Available Balance
                  <h5>Rs. {balance}</h5>
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-8 col-md-12">
            {chartsLoaded && (
              <>
                <Container>
                  <Row>
                    <Col>
                      <Card>
                        <ExpensePieChart expenseData={expenseData} />
                      </Card>
                    </Col>
                    <Col>
                      <Card>
                        <IncomePieChart incomeData={incomeData} />
                      </Card>
                    </Col>
                  </Row>
                </Container>
                <hr className="bg-info border-3 border-top border-secondary" />
                <IncomeBarChart incomeData={incomeData} />
                <hr className="bg-info border-3 border-top border-secondary" />
                <ExpenseBarChart expenseData={expenseData} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FrontPage;
