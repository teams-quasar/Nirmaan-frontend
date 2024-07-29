
import React from "react";
import Header from "./Header";
import Login from "./LoginForm";

function LoginPage() {
  return (
    <div className="pr-8 bg-white max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <aside className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
          <div className="shrink-0 mx-auto max-w-full bg-violet-500 bg-opacity-20 h-[1024px] w-[1000px] max-md:mt-8" />
        </aside>
        <main className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-8 max-md:mt-10 max-md:max-w-full">
            <Header />
            <Login />
          </div>
        </main>
      </div>
    </div>
  );
}

export default LoginPage;
