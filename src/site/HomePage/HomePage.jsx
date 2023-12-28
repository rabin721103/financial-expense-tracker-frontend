import { Link } from "react-router-dom";

const HomePage = ({ user }) => {
  return (
    <div>
      Welcome to home page of your financial tracker
      {user ? (
        <Link to="/frontpage">User Dashbord</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default HomePage;
