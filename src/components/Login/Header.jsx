
import React from "react";
import { Link } from "react-router-dom";

import NirmanButton from "../NirmanButton/NirmanButton";

function Header() {
  return (
    <header className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">

      <NirmanButton />

      <Link
        to="/signup"
        className="font-medium text-primary transition-all duration-200 hover:underline"
      >
        Sign Up
      </Link>
    </header>
  );
}

export default Header;
