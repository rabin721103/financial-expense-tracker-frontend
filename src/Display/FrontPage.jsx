function FrontPage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-6">
            My name is Rabin KC
            {/* <form className="p-3 shadow  my-4 bg-body rounded">
              <h3 style={{ textAlign: "center" }}>Add Wallet</h3>
              <div className="form-floating mb-3 mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Title"
                />
                <label htmlFor="floatingInput">Wallet Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="money"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Amount"
                />
                <label htmlFor="floatingInput">Amount</label>
              </div>
              <button type="button" className="btn btn-primary">
                Add Wallet
              </button>
            </form> */}
          </div>
          <div className="col-sm-4 offset-sm-2 col-md-6 offset-md-0">
            <h3 style={{ margin: "5px" }}>Recent transactions</h3>
            <div
              className="card shadow-lg my-2 bg-body rounded"
              style={{ width: "100%" }}
            >
              <div
                className="card-body"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "green",
                }}
              >
                <h5 className="card-title">Monthly Salary</h5>
                <p className="card-text">Salary</p>
                <span className="label success">Income</span>
              </div>
              <div
                className="card-body"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "green",
                }}
              >
                <p className="card-text">Salary of December</p>
                <h5 className="card-title">Rs. 40000</h5>
              </div>
            </div>
            <div
              className="card shadow-lg my-2 bg-body rounded"
              style={{ width: "100%" }}
            >
              <div
                className="card-body"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "red",
                }}
              >
                <h5 className="card-title">Groceries</h5>
                <p className="card-text">Grocery</p>
                <span className="label success">Expense</span>
              </div>
              <div
                className="card-body"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "red",
                }}
              >
                <p className="card-text">Bought groceries for january</p>
                <h5 className="card-title">Rs. 6510</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
            }}
          >
            <div className="col-md-3 shadow-lg p-2 my-5 mx-3 bg-body rounded">
              <button
                className="btn btn-outline-secondary"
                style={{ width: "100%" }}
              >
                <i className="fa fa-sack-dollar"></i>
                Total Income:
                <h5>Rs. 2,00,000</h5>
              </button>
            </div>
            <div className="col-md-3 shadow-lg p-2 my-5 mx-3 bg-body rounded">
              <button
                className="btn btn-outline-secondary"
                style={{ width: "100%" }}
              >
                <i className="fa fa-sack-dollar "></i>
                Total Balance:
                <h5>Rs. 50,000</h5>
              </button>
            </div>
            <div className="col-md-3 shadow-lg p-2 my-5 bg-body rounded">
              <button
                className="btn btn-outline-secondary"
                style={{ width: "100%" }}
              >
                <i className="fa fa-sack-dollar "></i>
                Available Balance
                <h5>Rs. 1,50,000</h5>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FrontPage;
