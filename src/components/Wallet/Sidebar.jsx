
import React from "react";
import SidebarItem from "./SidebarItem";

const sidebarItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c3f17b39b44ae261e250c94ef96be61922c8dc3902bd47970a71e690367c0b52?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    text: "My tests",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b5b33344886085330c65b1c1b0fb682d5a06daa86bd9ecfbc6712f3ea106c07b?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    text: "Discover",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/83d09e9c4ecc4d3ee475048156c70736c3b4860b956680fcce0a9990719b4aca?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    text: "Wallet",
    active: true,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d98357a71e2ad3092798be3422551f3981de837b313b8f8ec2e6b40cbc3a19bd?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    text: "Blogs",
  },
];

function Sidebar() {
  return (
    <aside className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center max-md:mt-8">
        <nav className="flex flex-col px-2.5 pt-6 pb-3.5 w-full bg-white border-r border-gray-300 border-solid">
          <div className="flex gap-5 justify-between ml-2.5 w-full">
            <div className="flex gap-1.5 justify-center self-start text-lg font-semibold leading-7 text-black whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0dfc3a30f8972106b54441ad1fcab98d6f7c723c82397f940d0bfbb259af6d54?apiKey=8a82faa9db93454483a68c973b38c7b0&"
                alt=""
                className="shrink-0 aspect-square w-[30px]"
              />
              <div className="my-auto">Nirmaan</div>
            </div>
            <button className="flex justify-center items-center px-2 w-8 h-8 bg-white rounded-md border border-gray-300 border-solid">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/90059eea1a608204b7a848011fdc95e3629ed375cb8b35e3736a985d16e1cf72?apiKey=8a82faa9db93454483a68c973b38c7b0&"
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
          <div className="flex gap-5 justify-between mt-3.5 w-full">
            <div className="flex gap-2.5 self-start text-sm font-medium leading-6 text-black">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/40dcceaa3f54d5320e0905ee7898c06a4d55a907f604687708412ed675b755bf?apiKey=8a82faa9db93454483a68c973b38c7b0&"
                alt=""
                className="shrink-0 aspect-square fill-gray-500 w-[30px]"
              />
              <div className="flex-auto my-auto">Prajjawal Pandit</div>
            </div>
            <button className="flex justify-center items-center px-2 w-8 h-8 bg-white rounded-md border border-gray-300 border-solid">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6496c364a80110b45fcfe03be2493f1c7868105771fb7b9a56ed91454967cb6e?apiKey=8a82faa9db93454483a68c973b38c7b0&"
                alt=""
                className="w-4 aspect-square"
              />
            </button>
          </div>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
