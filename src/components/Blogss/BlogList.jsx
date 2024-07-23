
import React from "react";
import BlogSearch from "./BlogSearch";
import BlogCard from "./BlogCard";

const blogData = [
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
    title:
      "Lorem ipsum dolor sit amet consectetur. Volutpat imperdiet id arcu in.",
    content:
      "Lorem ipsum dolor sit amet consectetur. Nisi nam viverra dolor faucibus tempor mollis eget sit. Gravida senectus sed faucibus eu sed pharetra feugiat. Venenatis mi diam egestas faucibus sit nam.",
    likes: 459,
    views: 9878,
    comments: 32,
  }
  // Repeat the above object 3 more times for the other blog cards
];

function BlogList() {
  return (
    <div className="flex flex-col mt-14 max-md:mt-10 max-md:max-w-full">
      <h1 className="text-3xl font-semibold tracking-tight leading-9 text-black max-md:max-w-full dark:text-white">
        Blogs
      </h1>
      <BlogSearch />
      <section className="mt-12 max-md:mt-10 max-md:max-w-full">
        {/* <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {blogData.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div> */}
         <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
    {blogData.map((blog, index) => (
      <BlogCard key={index} {...blog} />
    ))}
  </div>
      </section>
    </div>
  );
}

export default BlogList;
