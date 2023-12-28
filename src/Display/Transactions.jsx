function Transactions() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4 offset-sm-2 col-md-8 offset-md-0">
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
    </div>
  );
}

export default Transactions;
