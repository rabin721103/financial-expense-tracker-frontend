import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
import {
  emitErrorToast,
  emitSuccessToast,
} from "../site/Toastify/ToastEmitter";
import { Balance } from "../HelperFunctions/BalanceCheck";
import { excelGenerator } from "../HelperFunctions/ExportHelper";

function Expense() {
  const initial = {
    description: "",
    expenseAmount: "",
    expenseCategoryId: "",
    expenseName: "",
  };
  const [form, setForm] = useState(initial);
  const [expenseCategories, setExpenseCategories] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = form?.expenseId
        ? await axiosInstance.put(`/expenses/${form?.expenseId}`, form)
        : await axiosInstance.post("/expenses", form);

      if (response?.data?.response) {
        const others = expenses?.filter(
          (expense) => expense?.expenseId !== form?.expenseId
        );
        const newData = response?.data?.response;

        others.unshift(newData);
        setExpenses(others);

        setForm(initial);
        emitSuccessToast(response?.data?.message);
      } else {
        console.log(response);
        emitErrorToast(response?.data?.message);
      }
    } catch (error) {
      emitErrorToast(error?.response?.data?.message);
    }
  };

  const getCategories = async () => {
    const expenseResponse = await axiosInstance.get("/expenses/category");
    setExpenseCategories(expenseResponse?.data?.response);
  };
  const getExpenses = async () => {
    const expensesResponse = await axiosInstance.get("/expenses/allExpenses");
    setExpenses(expensesResponse?.data?.response);
  };

  useEffect(() => {
    getCategories();
    getExpenses();
  }, []);

  const handleExpenseExport = async () => {
    const expResponse = await axiosInstance.get("/expenses/allExpenses");
    const data = expResponse?.data?.response;

    if (expResponse?.data?.success) {
      const columns = [
        "expenseId",
        "expenseName",
        "expenseCategoryName",
        "expenseCategoryId",
        "date",
        "description",
        "expenseAmount",
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
          <button
            className="btn btn-outline-secondary"
            style={{ width: "10%", height: "16%" }}
            type="button"
            onClick={handleExpenseExport}
          >
            Export
            <i className="fa-solid fa-download"></i>
          </button>
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
              <h3 style={{ textAlign: "center" }}>Add Expense</h3>
              <div className="form-floating mb-3 mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Title"
                  name="expenseName"
                  value={form.expenseName}
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">Expense Title</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="money"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Amount"
                  name="expenseAmount"
                  value={form.expenseAmount}
                  onChange={handleChange}
                />
                <label htmlFor="floatingInput">Expense Amount</label>
              </div>
              {/* <div className="form-floating mb-3">
                <input
                  type="date"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Amount"
                />
                <label htmlFor="floatingInput">Date</label>
              </div> */}
              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  name="expenseCategoryId"
                  value={form.expenseCategoryId}
                  onChange={handleChange}
                >
                  <option disabled value="">
                    Select One
                  </option>
                  {expenseCategories?.map((cat, idx) => (
                    <option key={idx} value={cat?.expenseCategoryId}>
                      {cat?.name}
                    </option>
                  ))}
                </select>
                <label htmlFor="floatingInput">Expense Category</label>
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
                {form?.expenseId ? "Update Expense" : "Add Expense"}
              </button>
            </form>
          </div>
          <div
            className="col-8 shadow-lg p-3 my-5 bg-body rounded overflow-hidden overflow-scroll "
            style={{ alignContent: "center", height: "70vh" }}
          >
            <h3 style={{ margin: "5px" }}>Expense List</h3>
            {expenses.map((expense, index) => (
              <div
                key={index}
                className="card shadow-lg my-2 bg-body rounded"
                style={{ width: "100%" }}
              >
                <div
                  className="card-body"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h5 className="card-title">{expense?.expenseName}</h5>
                  <p className="card-text">{expense?.expenseCategoryName}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => setForm(expense)}
                  >
                    Edit
                  </button>
                </div>
                <div
                  className="card-body"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p className="card-text">{expense?.description}</p>
                  <h5 className="card-title">Rs. {expense?.expenseAmount}</h5>
                  <button className="btn btn-danger" disabled>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Expense;
