
import React from "react";

function PreviousPerformances() {
  const performances = [
    {
      examName: "Mock Test - 6524 8754",
      marks: 184,
      rank: 5741,
      percentile: 90.24,
    },
    {
      examName: "Mock Test - 6524 8754",
      marks: 184,
      rank: 5741,
      percentile: 90.24,
    },
    {
      examName: "Mock Test - 6524 8754",
      marks: 184,
      rank: 5741,
      percentile: 90.24,
    },
    {
      examName: "Mock Test - 6524 8754",
      marks: 184,
      rank: 5741,
      percentile: 90.24,
    },
    {
      examName: "Mock Test - 6524 8754",
      marks: 184,
      rank: 5741,
      percentile: 90.24,
    },
  ];

  return (
    <section className="flex gap-5 items-start px-16 pt-9 pb-20 mt-16 text-lg text-black bg-white rounded-3xl shadow-lg max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col flex-1 self-start">
        <h2 className="text-3xl font-bold">Previous Performances</h2>
        <div className="mt-14 text-xl font-bold tracking-wider uppercase text-neutral-600 max-md:mt-10">
          Exam Name
        </div>
        {performances.map((performance, index) => (
          <div key={index} className={`mt-${index === 0 ? "8" : "6"}`}>
            {performance.examName}
          </div>
        ))}
      </div>
      <div className="flex flex-col flex-1 self-end mt-20 whitespace-nowrap max-md:mt-10">
        <div className="flex gap-5 text-xl font-bold tracking-wider uppercase text-neutral-600">
          <div className="text-right">Marks</div>
          <div className="text-right">Rank</div>
          <div className="flex-auto">Percentile</div>
        </div>
        {performances.map((performance, index) => (
          <div key={index} className="flex gap-5 mt-6">
            <div>{performance.marks}</div>
            <div>{performance.rank}</div>
            <div className="flex-auto">{performance.percentile}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PreviousPerformances;
