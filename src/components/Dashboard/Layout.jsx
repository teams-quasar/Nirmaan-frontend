import React from 'react'

import Sidebar from "./Sidebar";

import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
     <div className="pr-8 bg-white max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
       <Sidebar />
       <Outlet />
      </div>
    </div>  
    </>
  )
}

export default Layout