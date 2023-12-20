import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./site/SiteLayout";
import HomePage from "./site/HomePage";
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard/Dashboard";
import Login from "./site/Login";
import PageNotFound from "./site/404Page/404Page";
import Register from "./site/Register";
import Protected from "./Protected";
import Sidebar from "./site/components/Sidebar";
import Expense from "./Display/Expense";
import Income from "./Display/Income";
import FrontPage from "./Display/FrontPage";
import Category from "./Display/Category";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="sidebar" element={<Sidebar />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="expense" element={<Expense />} />
          <Route path="income" element={<Income />} />
          <Route path="frontpage" element={<FrontPage />} />
          <Route path="category" element={<Category />} />
        </Route>
        <Route
          path="/admin"
          element={
            <Protected>
              <AdminLayout />
            </Protected>
          }
        >
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
