
import React from "react";

function Navigation() {
  const navItems = ["Blogs", "About", "Product"];

  return (
    <nav className="flex gap-5 mt-1 leading-[143%] text-slate-900">
      {navItems.map((item) => (
        <button
          key={item}
          className="flex flex-col justify-center px-4 py-2 bg-white"
        >
          <div className="justify-center">{item}</div>
        </button>
      ))}
    </nav>
  );
}

export default Navigation;
