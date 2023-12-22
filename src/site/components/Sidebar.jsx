import { Input, Label } from "reactstrap";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <Input type="checkbox" id="check" />
      <Label for="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </Label>
      <div className="sidebar">
        <header>Finance Tracker</header>
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
            <Link href="#">
              <i className="fa fa-credit-card"></i>Transaction
            </Link>
          </li>
          <li>
            <Link to="/category">
              <i className="fa fa-cogs"></i>Category
            </Link>
          </li>

          <li>
            <Link href="#">
              <i className="far fa-envelope"></i>Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
