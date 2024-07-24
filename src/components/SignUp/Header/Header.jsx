
import React from "react";
import Logo from "./Logo";
import LoginButton from "./LoginButton";

const Header = () => {
  return (
    <header className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
      <Logo />
      <LoginButton />
    </header>
  );
};

export default Header;
