/**
 * This code was generated by Builder.io.
 */
import React from "react";

function TestSections() {
  const sections = [
    { name: "Sample section 1", questions: 30, marks: 150 },
    { name: "Sample section 2", questions: 40, marks: 80 },
    { name: "Sample section 3", questions: 20, marks: 20 },
  ];

  return (
    <section className="self-center mt-8 w-full max-w-[544px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-5 text-base leading-6 text-black max-md:mt-10">
            <h2 className="text-sm font-medium leading-4 text-gray-500">
              Sections
            </h2>
            {sections.map((section, index) => (
              <div key={index} className="mt-5">
                {section.name}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex grow gap-5 justify-between text-base leading-6 text-black max-md:mt-10">
            <div className="flex flex-col px-5 whitespace-nowrap">
              <h3 className="text-sm font-medium leading-4 text-gray-500">
                Question
              </h3>
              {sections.map((section, index) => (
                <div key={index} className={index === 0 ? "mt-4" : "mt-6"}>
                  {section.questions}
                </div>
              ))}
            </div>
            <div className="flex flex-col px-5">
              <h3 className="text-sm font-medium leading-4 text-gray-500">
                Maximum Marks
              </h3>
              {sections.map((section, index) => (
                <div key={index} className={index === 0 ? "mt-5" : "mt-6"}>
                  {section.marks}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestSections;
