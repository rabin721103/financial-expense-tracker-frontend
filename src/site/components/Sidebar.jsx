import { Input, Label } from "reactstrap";
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Sidebar({ setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Do you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("user");

      setUser(null);
      // Navigate to the home page or login page
      navigate("/login");
    }
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    //eslint-disable-next-line
  }, [localStorage.getItem("user")]);
  return (
    <>
      <Input type="checkbox" id="check" />
      <Label for="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </Label>
      <div className="sidebar z-3">
        <header>
          <Link to="/" className="text-white">
            Finance Tracker
          </Link>
        </header>
        <ul>
          <li>
            <Link to="frontpage">
              <i className="fas fa-qrcode"></i>Dashboard
            </Link>
          </li>
          <li>
            <Link to="/expense">
              <i className="fa fa-minus-circle"></i>Expenses
            </Link>
          </li>
          <li>
            <Link to="/income">
              <i className="fa fa-plus-circle"></i>Income
            </Link>
          </li>
          <li>
            <Link to="/transactions">
              <i className="fa fa-credit-card"></i>Transaction
            </Link>
          </li>
          <li>
            <Link to="/category">
              <i className="fa fa-cogs"></i>Category
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <i className="fa-sharp fa-solid fa-user"></i>
              Profile
            </Link>
          </li>

          <li>
            <Link onClick={handleLogout}>
              <i className="fa-solid fa-right-from-bracket"></i>Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
