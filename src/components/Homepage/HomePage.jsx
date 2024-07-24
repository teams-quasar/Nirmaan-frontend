
import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import AuthButtons from "./AuthButtons";
import {Link,NavLink} from "react-router-dom";
function HomePage() {
  return (
    <>
    <header className="flex gap-5 justify-between items-start px-12 pt-5 pb-20 text-sm font-medium whitespace-nowrap bg-white max-md:flex-wrap max-md:px-5">
      <Logo />
      <Navigation />
      <AuthButtons />
    </header>
    <div className="text-center">for other webpages use
    <p>localhostxxxx/blogs</p>
    <p>localhostxxxx/test</p>
    <p>localhostxxxx/discover</p>
    <p>localhostxxxx/wallet</p>
    </div>
    
    </>
  );
}

export default HomePage;
