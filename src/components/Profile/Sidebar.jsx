
import React from "react";

const sidebarItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4379b6b75f220e17c9993e02b71d5bcb1a644ec6f9559075d8cf4cdc6ea76fce?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    label: "Dashboard",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b45b599c687f493512f21637dc68444f11cb9da2c23a671dd7bc24c70ce277f?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    label: "Explore",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b332dc35515b46ec82d5faf5bca33acf93f476ae741e7742f8a945f7c27298a?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    label: "Coins",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f5ea26c7b20260c4dfd44e072b52e54c507104fe323db3e292070afd8e8a555?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    label: "Result",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f99704a960f3449dbbed7a7c0748c88fbf1fda8358d98eec864034285a53e88?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    label: "Logout",
    className: "text-red-600",
  },
];

function Sidebar() {
  return (
    <nav className="flex flex-col justify-center text-xs font-bold text-black whitespace-nowrap max-md:hidden">
      <div className="flex flex-col items-center px-5 py-10 bg-neutral-100 max-md:hidden">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a678132d9c9c6f4b9bcbd65df73b96109dc97f02499921eee73cdbbca565fe60?apiKey=8a82faa9db93454483a68c973b38c7b0&"
          alt="Logo"
          className="w-10 aspect-square"
        />
        {sidebarItems.map((item, index) => (
          <React.Fragment key={item.label}>
            <img
              loading="lazy"
              src={item.icon}
              alt={`${item.label} icon`}
              className={`mt-${
                index === 0 ? "64" : index === 4 ? "60" : "11"
              } w-6 aspect-square max-md:mt-10`}
            />
            <div className={`mt-2 ${item.className || ""}`}>{item.label}</div>
          </React.Fragment>
        ))}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc51175f3fe25bfac5ede4108f9073c9bae2658234f6cf7eff015bffdff3d581?apiKey=8a82faa9db93454483a68c973b38c7b0&"
          alt="Additional feature"
          className="mt-7 rounded-none shadow-lg aspect-[1.23] w-[86px]"
        />
      </div>
    </nav>
  );
}

export default Sidebar;
