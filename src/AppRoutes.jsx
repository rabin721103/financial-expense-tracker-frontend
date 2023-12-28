import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./site/SiteLayout";
import HomePage from "./site/HomePage";
import Login from "./site/Login";
import PageNotFound from "./site/404Page/404Page";
import Register from "./site/Register";
import Protected from "./Protected";
// import Sidebar from "./site/components/Sidebar";
import Expense from "./Display/Expense";
import Income from "./Display/Income";
import FrontPage from "./Display/FrontPage";
import Category from "./Display/Category";
import UserProfile from "./Display/USerProfile";
import Transactions from "./Display/Transactions";
import ResponseInterceptor from "./services/ResponseInterceptor";
import { useState } from "react";

const AppRoutes = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <BrowserRouter>
      <ResponseInterceptor />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage user={user} />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route path="register" element={<Register />} />

          <Route
            path=""
            element={
              <>
                <SiteLayout user={user} setUser={setUser} />
                <Protected />
              </>
            }
          >
            <Route path="frontpage" element={<FrontPage />} />
            <Route path="expense" element={<Expense />} />
            <Route path="income" element={<Income />} />
            <Route path="category" element={<Category />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="transactions" element={<Transactions />} />
          </Route>
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
