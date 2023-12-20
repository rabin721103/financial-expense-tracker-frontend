import { Link } from "react-router-dom";

function Income() {
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
            style={{ width: "17%" }}
          >
            <i className="fa fa-sack-dollar fa-flip"></i>
            Current Balance:
            <h5>Rs. 2,00,000</h5>
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
                />
                <label htmlFor="floatingInput">Income Title</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="money"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Amount"
                />
                <label htmlFor="floatingInput">Income Amount</label>
              </div>
              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option disabled>Choose Category</option>
                  <option value="1">Salary</option>
                  <option value="2">House Rent</option>
                  <option value="3">Others</option>
                </select>
                <label htmlFor="floatingInput">Income Category</label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="floatingTextarea"
                ></textarea>
                <label htmlFor="floatingTextarea">Description</label>
              </div>
              <button type="button" className="btn btn-primary">
                Add Income
              </button>
            </form>
          </div>
          <div
            className="col-8 shadow-lg p-3 my-5 bg-body rounded"
            style={{ alignContent: "center", height: "70vh" }}
          >
            <h3 style={{ margin: "5px" }}>Income List</h3>
            <div
              className="card shadow-lg my-2 bg-body rounded"
              style={{ width: "100%" }}
            >
              <div
                className="card-body"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <h5 className="card-title">Income title 1</h5>
                <p className="card-text">Income Category</p>
              </div>
              <div
                className="card-body"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <p className="card-text">Description 1</p>
                <h5 className="card-title">Amount 1</h5>
              </div>
            </div>
            <div
              className="card shadow-lg my-2 bg-body rounded"
              style={{ width: "100%" }}
            >
              <div
                className="card-body"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <h5 className="card-title">Income title 2</h5>
                <p className="card-text">Income Category 2</p>
              </div>
              <div
                className="card-body"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <p className="card-text">Description 2</p>
                <h5 className="card-title">Amount 2</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Income;