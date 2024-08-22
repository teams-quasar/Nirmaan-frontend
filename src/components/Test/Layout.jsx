import React from 'react'


import Sidebar from "../Sidebar/Sidebar";


import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
     <div className="pr-8 bg-white  dark:bg-black dark:text-white">
      <div className="grid grid-cols-5 gap-4">
       <Sidebar />
       <div className='col-span-4  p-4'>
       <Outlet />
       </div>
      </div>
    </div>  
    </>
  )
}

export default Layout