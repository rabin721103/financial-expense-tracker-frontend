import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
import {
  emitErrorToast,
  emitSuccessToast,
} from "../site/Toastify/ToastEmitter";
import { Button } from "reactstrap";
import { excelGenerator } from "../HelperFunctions/ExportHelper";
import { Balance } from "../HelperFunctions/BalanceCheck.js";

function Income() {
  const initial = {
    description: "",
    incomeAmount: "",
    incomeCategoryId: "",
    incomeName: "",
  };

  const [form, setForm] = useState(initial);

  const [incomeCategories, setIncomeCategories] = useState([]);
  const [incomes, setIncomes] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const response = form?.incomeId
      ? await axiosInstance.put(`/incomes/${form?.incomeId}`, form)
      : await axiosInstance.post("/incomes", form);
    if (response?.data?.success) {
      const others = incomes?.filter(
        (income) => income?.incomeId !== form?.incomeId
      );
      const newData = response?.data?.response;

      others.unshift(newData);
      setIncomes(others);

      setForm(initial);
      emitSuccessToast(response?.data?.message);
    } else {
      emitErrorToast(response?.data?.message);
    }
  };

  const getCategories = async () => {
    const incomeResponse = await axiosInstance.get("/incomes/category");
    setIncomeCategories(incomeResponse?.data?.response);
  };
  const getIncomes = async () => {
    const incomesResponse = await axiosInstance.get("/incomes/allIncomes"); // Adjust the API endpoint accordingly
    setIncomes(incomesResponse?.data?.response);
  };

  useEffect(() => {
    getCategories();
    getIncomes();
  }, []);

  const handleExport = async () => {
    const incResponse = await axiosInstance.get("/incomes/allIncomes");
    const data = incResponse?.data?.response;

    if (incResponse?.data?.success) {
      const columns = [
        "incomeId",
        "incomeName",
        "incomeCategoryName",
        "incomeCategoryId",
        "date",
        "description",
        "incomeAmount",
      ];
      excelGenerator("Transactions", "transactions", columns, data);
    }
  };
  const balance = Balance();

  return (
    <>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/frontpage">
            <button className="btn btn-outline-danger ">
              <i className="fas fa-arrow-left mr-2"></i>Go Back
            </button>
          </Link>
          <Button
            className="bg-muted ms-5"
            type="button"
            onClick={handleExport}
          >
            Export
            <i className="fa-solid fa-download"></i>
          </Button>
          <button
            className="btn btn-outline-secondary"
            style={{ width: "17%" }}
          >
            <i className="fa fa-sack-dollar fa-flip"></i>
            Available Balance:
            <h5>Rs. {balance}</h5>
          </button>
        </div>
        <div className="row">
          <div className="col-4 ">
            <form className="p-3 shadow  my-5 bg-body rounded">
              <h3 style={{ textAlign: "center" }}>Income</h3>
              <div className="form-floating mb-3 mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Title"
                  name="incomeName"
                  value={form.incomeName}
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">Income Title</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="money"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Amount"
                  name="incomeAmount"
                  value={form.incomeAmount}
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">Income Amount</label>
              </div>
              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  name="incomeCategoryId"
                  value={form.incomeCategoryId}
                  onChange={handleChange}
                >
                  <option disabled value="">
                    Select One
                  </option>
                  {incomeCategories?.map((cat, idx) => (
                    <option key={idx} value={cat?.incomeCategoryId}>
                      {cat?.categoryName}
                    </option>
                  ))}
                </select>
                <label htmlFor="floatingInput">Income Category</label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="floatingTextarea"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="floatingTextarea">Description</label>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                {form?.incomeId ? "Update Income" : "Add Income"}
              </button>
            </form>
          </div>
          <div
            className="col-8 shadow-lg p-3 my-5 bg-body rounded overflow-hidden overflow-scroll "
            style={{ alignContent: "center", height: "70vh" }}
          >
            <h3 style={{ margin: "5px" }}>Income List</h3>
            {incomes?.map((income, index) => (
              <div
                key={index}
                className="card shadow-lg my-2 bg-body rounded"
                style={{ width: "100%" }}
              >
                <div
                  className="card-body"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h5 className="card-title">{income?.incomeName}</h5>
                  <p className="card-text">{income?.incomeCategoryName}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => setForm(income)}
                  >
                    Edit
                  </button>
                </div>
                <div
                  className="card-body"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p className="card-text">{income?.description}</p>
                  <h5 className="card-title">{income?.incomeAmount}</h5>

                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Income;
