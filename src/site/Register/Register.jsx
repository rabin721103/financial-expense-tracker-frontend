import { Link, useNavigate } from "react-router-dom";
import "../Login/Login.css";
import { useState } from "react";
import axiosInstance from "../../../axiosInstance";
import { emitSuccessToast } from "../Toastify/ToastEmitter";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    email: "",
    profession: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.userName.trim()) {
      newErrors.userName = "Username is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.profession.trim()) {
      newErrors.profession = "Profession is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axiosInstance.post("/auth/register", formData);
        const msg = response?.data?.message;
        emitSuccessToast(msg);

        navigate("/login");
      } catch (error) {
        console.error("Registration failed", error);
        // Handle error, show a message to the user, etc.
      }
    }
  };
  return (
    <>
      <div className="container mt-5">
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
                          <div className="col-12 text-danger mb-1">
                            {errors.userName && <p>{errors.userName}</p>}
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
                          <div className="col-12 text-danger mb-1">
                            {errors.password && <p>{errors.password}</p>}
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
                          <div className="col-12 text-danger mb-1">
                            {errors.profession && <p>{errors.profession}</p>}
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
                          <div className="col-12 text-danger mb-3">
                            {errors.email && <p>{errors.email}</p>}
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
                      <Link to="/login" className="btn btn-secondary">
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
