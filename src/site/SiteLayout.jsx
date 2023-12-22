import { Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Toast } from "reactstrap";

const SiteLayout = () => {
  return (
    <div>
      <Toast />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default SiteLayout;
