
import React from "react";
import Sidebar from "./Sidebar";
import BlogList from "./BlogList";

function BlogPage() {
  return (
    <div className="pr-8 bg-white max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <Sidebar />
        <main className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
          <BlogList />
        </main>
      </div>
    </div>
  );
}

export default BlogPage;
