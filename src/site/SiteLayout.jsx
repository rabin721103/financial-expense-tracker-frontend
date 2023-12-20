import { Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const SiteLayout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default SiteLayout;
