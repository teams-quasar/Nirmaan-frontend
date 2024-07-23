
import React from "react";
import QuestionPalette from "./QuestionPalette";
import QuestionArea from "./QuestionArea";

const MockTest = () => {
  return (
    <main className="bg-neutral-100">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <aside className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-8 py-7 mx-auto w-full text-base font-bold text-black bg-white max-md:px-5 max-md:mt-10">
            <h1 className="justify-center text-xl tracking-wider uppercase">
              LIVe mock test
            </h1>
            <p className="justify-center mt-2 text-neutral-600">
              Mock Test 6354 2415
            </p>
            <QuestionPalette />
          </div>
        </aside>
        <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
          <QuestionArea />
        </div>
      </div>
    </main>
  );
};

export default MockTest;
