
import React from "react";

const sidebarItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f73be539575fff37ee797fedf6af4a8f9a1eebb23ac3dadc63882e02d1543ad2?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    label: "Dashboard",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/200d6a4d4afa0dffd35b47036c03e86364741e438693ca0b01c5b4110528a1c5?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    label: "Explore",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/07f5c67c7b89650054ea6c1e90f1bd5f096c0f7a2dfdef4e1ed70c4bae97279b?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    label: "Coins",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/51afe06ae18c55ec68bde7d549bb0a0ba5eb0eee0a582beba031b0ba12dd803c?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    label: "Profile",
    isSpecial: true,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/52687575d010b060b4e029bf0c4481b32e686c77b17adf1427d92bd4c49c2745?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    label: "Profile",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/774b80a04e39bb272acd3066ebcd0b038e900804d9acb1f9a0f540369c3a486c?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    label: "Logout",
    isLogout: true,
  },
];

function Sidebar() {
  return (
    <nav className="flex flex-col justify-center self-start text-xs font-bold text-black whitespace-nowrap max-md:hidden">
      <div className="flex flex-col items-center px-5 py-10 bg-neutral-100 max-md:hidden">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca150b5b3ae17c35970fd9cbf93e94e7aa2f92512ee26c0820585946712edd4a?apiKey=8a82faa9db93454483a68c973b38c7b0&"
          alt="Logo"
          className="w-10 aspect-square"
        />
        {sidebarItems.map((item, index) => (
          <React.Fragment key={index}>
            <img
              loading="lazy"
              src={item.icon}
              alt={`${item.label} icon`}
              className={`mt-${
                index === 0 ? "64" : index === 3 ? "7" : "10"
              } w-6 aspect-square ${
                item.isSpecial
                  ? "rounded-none shadow-lg aspect-[1.23] w-[86px]"
                  : ""
              }`}
            />
            <div
              className={`mt-${index === 3 ? "7" : "2"} ${
                item.isLogout ? "text-red-600" : ""
              }`}
            >
              {item.label}
            </div>
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}

export default Sidebar;
