
import React from "react";

function TransactionItem({
  title,
  amount,
  type,
  timestamp,
  status,
  statusIcon,
}) {
  return (
    <div className="flex gap-5 items-center mx-6 mt-2.5 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
      <div className="grow self-stretch my-auto font-medium leading-[187.5%] dark:text-white">
        {title}
      </div>
      <div className="self-stretch  my-auto leading-[187.5%] dark:text-white">{amount}</div>
      <div className="self-stretch my-auto leading-[187.5%] dark:text-white">{type}</div>
      <div className="flex gap-5 self-stretch">
        <div className="flex-auto my-auto leading-[187.5%] dark:text-white">{timestamp}</div>
        <div className="flex gap-1.5 justify-center leading-8 whitespace-nowrap">
          <img
            loading="lazy"
            src={statusIcon}
            alt=""
            className="shrink-0 my-auto w-5 aspect-square dark:text-white"
          />
          <div dark:text-white>{status}</div>
        </div>
      </div>
    </div>
  );
}

export default TransactionItem;
