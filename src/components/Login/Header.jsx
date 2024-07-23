
import React from "react";

function Header() {
  return (
    <header className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-1 justify-center my-auto text-lg font-semibold leading-7 text-black whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccb4c393fb07232e9984893a6f1548e299c95cc11ed0f2092c6ed0a7f613786e?apiKey=8a82faa9db93454483a68c973b38c7b0&"
          className="shrink-0 aspect-square w-[30px]"
          alt="Nirmaan logo"
        />
        <div className="my-auto">Nirmaan</div>
      </div>
      <button className="justify-center px-4 py-2 text-sm font-medium leading-6 rounded-md bg-white bg-opacity-0 text-slate-900">
        Sign Up
      </button>
    </header>
  );
}

export default Header;
