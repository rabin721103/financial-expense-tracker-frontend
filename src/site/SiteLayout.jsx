import { Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Toast from "./Toastify/Toast";

const SiteLayout = ({ user, setUser }) => {
  return (
    <div className="p-0">
      <Toast />
      {user && <Sidebar setUser={setUser} />}

      <Outlet />
    </div>
  );
};

export default SiteLayout;
