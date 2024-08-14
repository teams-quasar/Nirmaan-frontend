
import React from "react";

function ActionButton({ text, iconSrc, bgColor }) {
  return (
    <button
      className={`flex flex-1 gap-2 justify-center items-center px-4 py-2 rounded-md ${bgColor}`}
    >
      <img
        loading="lazy"
        src={iconSrc}
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        alt=""
      />
      <span className="self-stretch my-auto">{text}</span>
    </button>
  );
}

export default ActionButton;
