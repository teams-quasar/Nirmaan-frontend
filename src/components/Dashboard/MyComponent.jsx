
import React from "react";

import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

function MyComponent() {
  return (
    <div className="pr-8 bg-white max-md:pr-5 dark:bg-black dark:text-white">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 dark:bg-black dark:text-white">
       <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default MyComponent;
