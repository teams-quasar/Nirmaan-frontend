
import React from "react";

function Sidebar() {
  const menuItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7c35d6ac670567ed436f498cc826f8d3487d2ec14e545cffdf6892abd6bb8cf5?apiKey=8a82faa9db93454483a68c973b38c7b0&",
      label: "Dashboard",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/34dd01d2b8b3d914c9f67dd9f26587a92f22c1b901a250df169a9388d6d79996?apiKey=8a82faa9db93454483a68c973b38c7b0&",
      label: "Explore",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/68daea6932d50f5ef8c79f01425ebc7ecd70fd18bb5dcb4b12a8681e770298cb?apiKey=8a82faa9db93454483a68c973b38c7b0&",
      label: "Coins",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/51afe06ae18c55ec68bde7d549bb0a0ba5eb0eee0a582beba031b0ba12dd803c?apiKey=8a82faa9db93454483a68c973b38c7b0&",
      label: "",
      isSpecial: true,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/84d6508763bf4fc268c9d1dac3fd52a8838f0d88b49fa2d8022a9180cfc414cc?apiKey=8a82faa9db93454483a68c973b38c7b0&",
      label: "Profile",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7f4688cc193ff4e762c0d1e6e4f3fa895d7d2094956e95a17e50323a8f29f598?apiKey=8a82faa9db93454483a68c973b38c7b0&",
      label: "Logout",
      isLogout: true,
    },
  ];

  return (
    <nav className="flex flex-col justify-center self-start text-xs font-bold text-black whitespace-nowrap max-md:hidden">
      <div className="flex flex-col items-center px-5 py-10 bg-neutral-100 max-md:hidden">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/eeeb8e22bb1a60a47cfa6e46e9f4a157389c4ad52a9c0dec8cebf4b1643a75c9?apiKey=8a82faa9db93454483a68c973b38c7b0&"
          alt=""
          className="w-10 aspect-square"
        />
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <img
              loading="lazy"
              src={item.icon}
              alt=""
              className={`mt-${
                index === 0 ? "64" : index === 3 ? "7" : "10"
              } w-${item.isSpecial ? "[86px]" : "6"} aspect-${
                item.isSpecial ? "[1.23]" : "square"
              } ${item.isSpecial ? "rounded-none shadow-lg" : ""} max-md:mt-10`}
            />
            {item.label && (
              <div
                className={`mt-${index === 0 || index === 2 ? "2" : "1.5"} ${
                  item.isLogout ? "text-red-600" : ""
                }`}
              >
                {item.label}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}

export default Sidebar;
