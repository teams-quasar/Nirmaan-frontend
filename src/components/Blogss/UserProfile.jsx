
import React from "react";

function UserProfile() {
  return (
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
  );
}

export default UserProfile;
