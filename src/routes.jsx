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
// import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import LoginPage from "./components/Login/LoginPage.jsx";
import Wallet from "./components/Wallet/Wallet.jsx";
import HomePage from "./components/Homepage/HomePage.jsx";
// import ThemeSwitcher from "./features/theme/ThemeSwitcher";
import AuthLayout from "./utils/AuthLayout.jsx";
import App from "./App.jsx";

import TestComponent from "./components/TestComponent/TestComponent.jsx";


export const router = createBrowserRouter(
  createRoutesFromElements(
    

    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route
        path="login"
        element={
          <AuthLayout authentication={false}>
            <LoginPage />
          </AuthLayout>
        }
      />
      <Route
        path="signup"
        element={
          <AuthLayout authentication={false}>
            <SignUpPage />
          </AuthLayout>
        }
      />
      <Route
        path="quiz"
        element={

          <AuthLayout authentication ={false}>

            <Layout />
          </AuthLayout>
        }
      >
        {/* Ensure that Layout has an Outlet for rendering nested routes */}
        <Route index element={<MainContent />} />
        <Route path="blogs" element={<BlogList />} />
        <Route path="wallet" element={<Wallet />} />

        <Route path="discover" element={<TestComponent />} />

        <Route path="test" element={<MainContent />} />
      </Route>
    </Route>
  )
);

