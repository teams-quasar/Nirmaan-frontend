import React from "react";
import BlogSearch from "./BlogSearch";
import BlogCard from "./BlogCard";
import { useState } from "react";
import BlogFilter from "./BlogFilter";
import BlogView from "./BlogView";
import BlogNew from "./BlogNewButton";
import BlogEditor from "../BlogEditorComponents/BlogEditor";
import BlogEdit from "./BlogEditButton";

import BlogNewForm from "../BlogComponentsNew/BlogForm";

const blogData = [
  {
    tags: ["Freshers", "UPSC"],
    date: "12 Feb 2024",
    title: "Nirman",
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisi nam viverra dolor faucibus tempor mollis eget sit. Gravida senectus sed faucibus eu sed pharetra feugiat. Venenatis mi diam egestas faucibus sit nam.",
    likes: 459,
    views: 9878,
    comments: 32,
  },
  {
    tags: ["Freshers", "UPSC"],
    date: "12 Feb 2024",
    title:
      "Lorem ipsum dolor sit amet consectetur. Volutpat imperdiet id arcu in.",
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisi nam viverra dolor faucibus tempor mollis eget sit. Gravida senectus sed faucibus eu sed pharetra feugiat. Venenatis mi diam egestas faucibus sit nam.",
    likes: 459,
    views: 9878,
    comments: 32,
  },

  {
    tags: ["Freshers", "UPSC"],
    date: "12 Feb 2024",
    title:
      "Lorem ipsum dolor sit amet consectetur. Volutpat imperdiet id arcu in.",
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisi nam viverra dolor faucibus tempor mollis eget sit. Gravida senectus sed faucibus eu sed pharetra feugiat. Venenatis mi diam egestas faucibus sit nam.",
    likes: 459,
    views: 9878,
    comments: 32,
  },
  {
    tags: ["Freshers", "UPSC"],
    date: "12 Feb 2024",
    title:
      "Lorem ipsum dolor sit amet consectetur. Volutpat imperdiet id arcu in.",
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisi nam viverra dolor faucibus tempor mollis eget sit. Gravida senectus sed faucibus eu sed pharetra feugiat. Venenatis mi diam egestas faucibus sit nam.",
    likes: 459,
    views: 9878,
    comments: 32,
  },
  {
    tags: ["Freshers", "UPSC"],
    date: "12 Feb 2024",
    title: "Very small title ",
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisi nam viverra dolor faucibus tempor mollis eget sit. Gravida senectus sed faucibus eu sed pharetra feugiat. Venenatis mi diam egestas faucibus sit nam.",
    likes: 459,
    views: 9878,
    comments: 32,
  },

  // Repeat the above object 3 more times for the other blog cards
];

function BlogListCo() {
  const [filteredBlogs, setFilteredBlogs] = useState(blogData);

  const handleSearch = (searchTerm) => {
    const filtered = blogData.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlogs(filtered);
  };
  return (
    <>
      <div className="flex flex-col mt-14 max-md:mt-10 max-md:max-w-full">
        <BlogEditor />
        <BlogNewForm />

        <h1 className="text-3xl font-semibold tracking-tight leading-9 text-black max-md:max-w-full dark:text-white">
          Blogs
        </h1>
        <div className="flex flex-row mt-4 justify-between">
          <div className="flex flex-row gap-8">
            <BlogSearch onSearch={handleSearch} />
            <BlogFilter />
            <BlogView />
          </div>
          <BlogEdit />
          <BlogNew />
        </div>
        <section className="mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="  grid grid-cols-1 gap-5 md:grid-cols-2">
            {filteredBlogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
        </section>
        <section className="mt-12 max-md:mt-10 max-md:max-w-full"></section>
      </div>
    </>
  );
}

export default BlogListCo;
{
  /* {isChildVisible && (
    <div className="fixed inset-0 overflow-auto flex items-start  z-50">
      <div className="  rounded-lg w-full justify-end  ">
        <BlogEditor />
      </div>
    </div>   )}*/
}
