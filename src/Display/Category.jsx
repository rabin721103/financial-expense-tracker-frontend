import { Link } from "react-router-dom";
import "./Category.css";

function Category() {
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
            <div className="form-floating mb-3 mt-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Title"
              />
              <label htmlFor="floatingInput">Title</label>
            </div>
            <div className="form-floating mb-3 mt-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Title"
              />
              <label htmlFor="floatingInput">Category Name</label>
            </div>

            <button type="button" className="btn btn-primary">
              Add
            </button>
          </form>
        </div>
        <div
          className="col-8 shadow-lg p-3 my-5 bg-body rounded"
          style={{ alignContent: "center", height: "70vh" }}
        >
          <h3 style={{ margin: "5px" }}>Category List</h3>
          <div className="top-container">
            <div className="card-a ">
              <i className="fa-solid fa-xmark"></i>
              <p>Salary</p>
            </div>
            <div className="card-a">
              <i className="fa-sharp fa-solid fa-xmark "></i>
              <p>Commission</p>
            </div>
            <div className="card-a">
              <i className="fa-solid fa-xmark fa-beat"></i>
              <p>Bonus</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
