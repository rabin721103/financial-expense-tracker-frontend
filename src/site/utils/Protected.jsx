import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const userData = JSON.parse(localStorage.getItem("auth"));

  if (!userData) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default Protected;
