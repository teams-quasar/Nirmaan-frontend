import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./components/Dashboard/Layout.jsx";
import BlogList from "./components/Blogss/BlogList.jsx";
import MainContent from "./components/Dashboard/MainContent.jsx";
import SignUpPage from "./components/SignUp/SignUpPage/SignUpPage.jsx";
import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import LoginPage from "./components/Login/LoginPage.jsx";
import Wallet from "./components/Wallet/Wallet.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Routes> */}
     
        <Route element={<PrivateRoutes />}>

          <Route path="/" element={<Layout />}>
            <Route index element={<MainContent />} />
            <Route path="blogs" element={<BlogList />} />
            <Route path="wallet" element={<Wallet />} />

            <Route path="test" element={<MainContent />} />
          </Route>
          <Route path="discover" element={<BlogList />} />
        </Route>
      {/* </Routes> */}

      <Route path = "login" element = {<LoginPage />} />
   
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
