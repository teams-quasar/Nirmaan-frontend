
import React from "react";

function PerformanceGraph() {
  return (
    <div className="flex gap-4 mt-20 max-md:flex-wrap max-md:mt-10">
      <div className="flex flex-col self-start text-base text-black whitespace-nowrap max-md:hidden">
        <div>360</div>
        <div className="mt-20 max-md:mt-10">270</div>
        <div className="mt-20 max-md:mt-10">180</div>
        <div className="mt-20 max-md:mt-10">90</div>
        <div className="self-start mt-20 ml-5 max-md:mt-10 max-md:ml-2.5">
          0
        </div>
      </div>
      <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <div className="shrink-0 w-1 bg-black border-black border-solid border-[3px] h-[360px]" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/86ee21dfbdb805d73355b4bd33d84cb128afbae32faa1dd129de928a17c420e5?apiKey=8a82faa9db93454483a68c973b38c7b0&"
            alt="Performance graph"
            className="grow shrink-0 my-auto border-blue-600 border-solid aspect-[4.17] basis-0 border-[5px] stroke-[5px] stroke-blue-600 w-fit max-md:max-w-full"
          />
        </div>
        <div className="shrink-0 bg-black border-black border-solid border-[3px] h-[3px] max-md:max-w-full" />
        <div className="flex gap-5 self-end px-px mt-3.5 text-base text-black">
          <div className="my-auto">Latest Tests</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/83cb29c472284fc49133c9028ebbb838cf617ecdc6c5ed32cbd5205b2ca2aaf3?apiKey=8a82faa9db93454483a68c973b38c7b0&"
            alt=""
            className="shrink-0 w-5 aspect-square"
          />
        </div>
      </div>
    </div>
  );
}

export default PerformanceGraph;
