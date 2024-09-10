
import React from "react";

function TestResults() {
  const attempts = [
    { number: 1, date: "12 Jan, 06:45 PM", marks: 136 },
    { number: 2, date: "15 Jan, 11:30 PM", marks: 192 },
    { number: 3, date: "20 Jan, 02:05 PM", marks: 238 },
  ];

  return (
    <section className="self-center mt-8 w-full max-w-[544px] max-md:max-w-full">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">Attempt Number</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Attempted On</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Marks Obtained</th>
            </tr>
          </thead>
          <tbody>
            {attempts.map((attempt, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="px-4 py-2 border border-gray-300">Attempt {attempt.number}</td>
                <td className="px-4 py-2 border border-gray-300">{attempt.date}</td>
                <td className="px-4 py-2 border border-gray-300">{attempt.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TestResults;
