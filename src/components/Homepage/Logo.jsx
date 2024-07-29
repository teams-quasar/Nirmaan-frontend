
import React from "react";

function Logo() {
  return (
    <div className="flex gap-1 justify-center mt-1.5 text-lg font-semibold leading-7 text-black">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/97c685257f19fa32798e6edbd8955e96c3608073804d0a22b4189fde5fe79088?apiKey=8a82faa9db93454483a68c973b38c7b0&"
        className="shrink-0 aspect-square w-[30px]"
        alt="Nirmaan logo"
      />
      <div className="my-auto">Nirmaan</div>
    </div>
  );
}

export default Logo;
