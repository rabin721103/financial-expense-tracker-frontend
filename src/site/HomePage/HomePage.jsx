import { Link } from "react-router-dom";

const HomePage = ({ user }) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ backgroundColor: "#273c5e" }}
      >
        <a className="navbar-brand ml-5" style={{ fontSize: "27px" }}>
          Financial Tracker
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
        <form className="d-flex mr-5">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </nav>

      <section className="wrapper my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div>
                {user ? (
                  <>
                    <div>
                      <h1>Welcome to Financial Tracker</h1>
                      <button className="btn btn-outline-success">
                        <Link to="/frontpage">User Dashboard</Link>
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h1>Welcome to Financial Tracker</h1>
                      <h3>Please Login!!!</h3>
                      <button className="btn btn-outline-primary">
                        <Link
                          to="/login"
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          Get Started
                        </Link>
                      </button>
                    </div>
                  </>
                )}
                <br />
              </div>
              {/* <div className="btn_wrapper">
                  <Button className="btn btn-secondary text-light-emphasis mx-2">
                    <Link>Login</Link> <i className="ri-arrow-right-line"></i>
                  </Button>

                  <Button className="btn btn-secondary">
                    <Link to="/register">Sign Up</Link>
                  </Button>
                </div> */}
            </div>
            <div className="col-md-6 mt-5">
              <div className="team_img_wrapper">
                <img
                  src="../src/assets/team.svg"
                  alt="team-img"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
