import { Link } from "react-router-dom";
import "./Category.css";
import { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";
import { emitSuccessToast } from "../site/Toastify/ToastEmitter";

function Category() {
  const [expensecategory, setExpenseCategory] = useState(false);
  const [incomecategory, setIncomeCategory] = useState(false);
  const [expenseCategories, setExpenseCategories] = useState([]);
  const [incomeCategories, setIncomeCategories] = useState([]);

  // Expense form state
  const [expenseCategoryName, setExpenseCategoryName] = useState("");
  const [expenseLimit, setExpenseLimit] = useState("");

  // Income form state
  const [incomeCategoryName, setIncomeCategoryName] = useState("");

  const expenseHandler = () => {
    setExpenseCategory(true);
    setIncomeCategory(false);
  };

  const incomeHandler = () => {
    setIncomeCategory(true);
    setExpenseCategory(false);
  };
  const handleAddCategory = async () => {
    try {
      if (expensecategory) {
        // Handle expense category form data
        const response = await axiosInstance.post("/expenses/category", {
          name: expenseCategoryName,
          expenseLimit,
        });
        emitSuccessToast(response?.data?.message);
        console.log(response?.data?.message);
        // console.log("Expense category added successfully:", response.data);
      } else if (incomecategory) {
        // Handle income category form data
        const response = await axiosInstance.post("/incomes/category", {
          categoryName: incomeCategoryName,
        });
        emitSuccessToast(response?.data?.message);

        console.log("Income category added successfully:", response.data);
      }
    } catch (error) {
      console.error("Error adding category:", error.message);
    }
  };
  const fetchData = async () => {
    try {
      const expenseResponse = await axiosInstance.get("/expenses/category");
      setExpenseCategories(expenseResponse?.data?.response);

      const incomeResponse = await axiosInstance.get("/incomes/category");
      setIncomeCategories(incomeResponse?.data?.response);
    } catch (error) {
      console.error("Error fetching categories:", error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <Link to="/frontpage">
        <button className="btn btn-outline-danger ">
          <i className="fas fa-arrow-left mr-2"></i>Go Back
        </button>
      </Link>
      <div className="row">
        <div className="col-4 ">
          <form className="p-3 shadow  my-5 bg-body rounded">
            <h3 style={{ textAlign: "center" }}>Category</h3>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  onClick={expenseHandler}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Expense
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  onClick={incomeHandler}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Income
                </label>
              </div>
            </div>
            {expensecategory && (
              <div>
                <div className="form-floating mb-3 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    value={expenseCategoryName}
                    onChange={(e) => setExpenseCategoryName(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Category Name</label>
                </div>
                <div className="form-floating mb-3 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    value={expenseLimit}
                    onChange={(e) => setExpenseLimit(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Set Expense Limit</label>
                </div>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddCategory}
                >
                  Add
                </button>
              </div>
            )}
            {incomecategory && (
              <div>
                <div className="form-floating mb-3 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    value={incomeCategoryName}
                    onChange={(e) => setIncomeCategoryName(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Category Name</label>
                </div>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddCategory}
                >
                  Add
                </button>
              </div>
            )}
          </form>
        </div>
        <div
          className="col-6 shadow-lg p-3 my-5 bg-body rounded overflow-hidden overflow-scroll "
          style={{ alignContent: "center", height: "35vh" }}
        >
          <h3 style={{ margin: "5px" }}>Expense Category List</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Category Name</th>
                <th scope="col">Expense Limit</th>
                {/* Add more columns as needed */}
              </tr>
            </thead>
            <tbody>
              {expenseCategories?.map((category, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{category.name}</td>
                  <td>{category.expenseLimit}</td>
                  {/* Add more columns as needed */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className="col-6 shadow-lg p-3 my-5 bg-body rounded overflow-hidden overflow-scroll "
          style={{ alignContent: "center", height: "35vh" }}
        >
          <h3 style={{ margin: "5px" }}>Income Category List</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Category Name</th>
                {/* Add more columns as needed */}
              </tr>
            </thead>
            <tbody>
              {incomeCategories.map((category, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{category.categoryName}</td>
                  {/* Add more columns as needed */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Category;
