import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import axiosInstance from "../../../axiosInstance";
const Login = ({ setUser }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const getProfile = async () => {
    try {
      const response = await axiosInstance.get("/user/profile");
      localStorage.setItem(
        "user",
        JSON.stringify(response?.data?.response ?? "")
      );
      setUser(response?.data?.response);
      navigate("/frontpage");
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = async () => {
    try {
      const response = await axiosInstance.post("/auth/login", {
        userName: userName.trim(),
        password: password.trim(),
      });
      const token = response?.data?.token;
      if (token) {
        // localStorage.setItem("token", response?.response);
        getProfile();
      }
    } catch (error) {
      console.log(error);
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
                    <h4 className="btm-sep pb-3 mb-5">Login</h4>
                    <form className="form" action="" method="POST">
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group position-relative my-3">
                            <span className="zmdi zmdi-account"></span>
                            <input
                              type="text"
                              id="email"
                              className="form-control"
                              placeholder="Username"
                              value={userName}
                              onChange={(e) => setUserName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group position-relative my-3">
                            <span className="zmdi zmdi-email"></span>
                            <input
                              type="text"
                              id="password"
                              className="form-control"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-12 text-lg-right my-3">
                          <a href="#" className="c-black">
                            Forgot password ?
                          </a>
                        </div>
                        <div className="col-12 mt-30">
                          <button
                            type="button"
                            id="submit"
                            className="btn btn-lg btn-custom btn-dark btn-block"
                            onClick={handleClick}
                          >
                            Sign In
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="content text-center">
                    <div className="border-bottom pb-5 mb-5">
                      <h3 className="c-black">First time here?</h3>
                      <Link to="/register" className="btn btn-custom">
                        Sign up
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

export default Login;
