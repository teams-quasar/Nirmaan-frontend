
import React from "react";
import SidebarItem from "./SidebarItem";
import UserProfile from "./UserProfile";

const sidebarItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e69662981acab63aa64aa1912c25c27ffdf7548842bbbc32f3e8840991b488b0?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    text: "My tests",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/61c1e34b7ad273d3b330d993c38ff910886302f6e36c1ab5cddfbec15ec36e09?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    text: "Discover",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa068a97d9c74226417b8a0b967e6b3ab77297120310ee40f1f2f9fcd0ffccd3?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    text: "Wallet",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d98357a71e2ad3092798be3422551f3981de837b313b8f8ec2e6b40cbc3a19bd?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    text: "Blogs",
    active: true,
  },
];

function Sidebar() {
  return (
    <aside className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center max-md:mt-6">
        <nav className="flex flex-col px-2.5 pt-6 pb-3.5 w-full bg-white border-r border-gray-300 border-solid">
          <div className="flex gap-5 justify-between ml-2.5 w-full">
            <div className="flex gap-1.5 justify-center self-start text-lg font-semibold leading-7 text-black whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f81070173ad6bb2f144fbe6557b07afa4c0787e9cd624e7adfe162f9d149a7dc?apiKey=8a82faa9db93454483a68c973b38c7b0&"
                alt=""
                className="shrink-0 aspect-square w-[30px]"
              />
              <div className="my-auto">Nirmaan</div>
            </div>
            <button className="flex justify-center items-center px-2 w-8 h-8 bg-white rounded-md border border-gray-300 border-solid">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7b637d73b6b64ebc42597ba8442287cdb9e0f17d1e4089e86b6378e8635cc4c?apiKey=8a82faa9db93454483a68c973b38c7b0&"
                alt=""
                className="w-4 aspect-square"
              />
            </button>
          </div>
          <hr className="shrink-0 mt-6 h-px bg-gray-300 border border-gray-300 border-solid" />
          {sidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              text={item.text}
              active={item.active}
            />
          ))}
          <hr className="shrink-0 h-px bg-gray-300 border border-gray-300 border-solid mt-[673px] max-md:mt-10" />
          <UserProfile />
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
