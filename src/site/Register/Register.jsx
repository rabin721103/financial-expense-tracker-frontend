import { Link, useNavigate } from "react-router-dom";
import "../Login/Login.css";
import { useState } from "react";
import axiosInstance from "../../../axiosInstance";
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    email: "",
    profession: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/user/register", formData);
      console.log(response?.data?.message);
      navigate("/Login");
    } catch (error) {
      console.error("Registration failed", error);
      // Handle error, show a message to the user, etc.
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-11 mt-60 mx-md-auto">
            <div className="login-box bg-white pl-lg-5 pl-0">
              <div className="row no-gutters align-items-center">
                <div className="col-md-6">
                  <div className="form-wrap bg-white">
                    <h4 className="btm-sep pb-3 mb-5">Register</h4>
                    <form
                      className="form"
                      onSubmit={handleSubmit}
                      action=""
                      method="POST"
                    >
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group position-relative my-3">
                            <span className="zmdi zmdi-account"></span>
                            <input
                              type="text"
                              name="userName"
                              className="form-control"
                              placeholder="Username"
                              value={formData.userName}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group position-relative my-3">
                            <span className="zmdi zmdi-email"></span>
                            <input
                              type="text"
                              name="password"
                              className="form-control"
                              placeholder="Password"
                              value={formData.password}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group position-relative my-3">
                            <span className="zmdi zmdi-account"></span>
                            <input
                              type="text"
                              name="profession"
                              className="form-control"
                              placeholder="Profession"
                              value={formData.profession}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group position-relative my-3">
                            <span className="zmdi zmdi-account"></span>
                            <input
                              type="text"
                              name="email"
                              className="form-control"
                              placeholder="Email Address"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-12 mt-30">
                          <button
                            type="submit"
                            id="submit"
                            className="btn btn-lg btn-custom btn-dark btn-block"
                          >
                            Sign Up
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="content text-center">
                    <div className="border-bottom pb-5 mb-5">
                      <h3 className="c-black">Already Have Account</h3>
                      <Link to="/login" className="btn btn-custom">
                        Login Here
                      </Link>
                    </div>
                    <h5 className="c-black mb-4 mt-n1">Or Sign In With</h5>
                    <div className="socials">
                      <a href="#" className="zmdi zmdi-facebook"></a>
                      <a href="#" className="zmdi zmdi-twitter"></a>
                      <a href="#" className="zmdi zmdi-google"></a>
                      <a href="#" className="zmdi zmdi-instagram"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
