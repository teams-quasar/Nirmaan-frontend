
import React from "react";

function TabNavigation() {
  return (
    <nav className="flex flex-wrap items-start p-1.5 mt-8 w-full font-medium leading-none rounded-md bg-slate-100 max-md:mr-1.5 max-md:max-w-full">
      <div className="flex-1 shrink gap-2.5 self-stretch px-3 py-1.5 rounded min-w-[240px] text-slate-900">
        Exam schema
      </div>
      <div className="flex-1 shrink gap-2.5 self-stretch px-3 py-1.5 bg-white rounded min-w-[240px] text-slate-700">
        Marketplace info
      </div>
    </nav>
  );
}

export default TabNavigation;
