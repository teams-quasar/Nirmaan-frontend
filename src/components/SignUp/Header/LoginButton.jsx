
import React from "react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Link
        to="/login"
        className="font-medium text-primary transition-all duration-200 hover:underline"
      >
        Log In
      </Link>
  );
};

export default LoginButton;
