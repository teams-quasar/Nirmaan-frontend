// src/routes.js
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// import Layout from "./components/Dashboard/Layout.jsx";
import Layout from "./components/Dashboard/Layout.jsx";
import BlogList from "./components/Blogss/BlogList.jsx";
import MainContent from "./components/Dashboard/MainContent.jsx";
import SignUpPage from "./components/SignUp/SignUpPage/SignUpPage.jsx";
import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import LoginPage from "./components/Login/LoginPage.jsx";
import Wallet from "./components/Wallet/Wallet.jsx";
import HomePage from "./components/Homepage/HomePage.jsx";
// import ThemeSwitcher from "./features/theme/ThemeSwitcher";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PrivateRoutes />}>
      <Route index element={<HomePage />} />
        <Route path="/" element={<Layout />}>
         
          <Route path="blogs" element={<BlogList />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="discover" element={<BlogList />} />
          <Route path="test" element={<MainContent />} />
        </Route>
        {/* <Route path="discover" element={<BlogList />} /> */}
      </Route>
      <Route path="login" element={<LoginPage />} />
    </>
  )
);
