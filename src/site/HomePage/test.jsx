import React from "react";

function test() {
  return (
    <>
      <header className="container-fluid header">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              Financial Tracker
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="ri-menu-line"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Account
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className="wrapper-a">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="main-heading">
                Welcome to <span>Financial Tracker</span>
                <br />
                Track Budgets
              </h1>
              <p className="info-text">
                Track your entire expenses and increase your savings
              </p>

              <div className="btn_wrapper">
                <button className="btn btn-primary view_more_btn">
                  Login <i className="ri-arrow-right-line"></i>
                </button>

                <button className="btn btn-secondary documentation_btn">
                  Sign Up
                </button>
              </div>
            </div>
            <div className="col-md-6">
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
}

export default test;
