 
import React from "react";
import ExamItem from "./ExamItem";

const exams = [
  {
    title: "Some Generic Medium Title - 2",
    questionCount: 90,
    duration: "120 mins",
    attempts: "0 / 5",
    status: "New",
  },
  {
    title: "Small Title - 1",
    questionCount: 5,
    duration: "15 mins",
    attempts: "2 / 2",
    status: "Completed",
  },
  {
    title: "Some Generic Long Title which has extra words - 2",
    questionCount: 150,
    duration: "120 mins",
    attempts: "2 / 5",
    status: "Attempted",
  },
  {
    title: "Some Generic Medium Title - 2",
    questionCount: 100,
    duration: "60 mins",
    attempts: "0 / 10",
    status: "New",
  },
  {
    title: "Some Generic Medium Title - 2",
    questionCount: 360,
    duration: "180 mins",
    attempts: "4 / 5",
    status: "Attempted",
  },
  {
    title: "Some Generic Medium Title - 2",
    questionCount: 360,
    duration: "180 mins",
    attempts: "4 / 5",
    status: "nAttempted",
  },
];

function ExamList() {
  return (
    
   

<section className="mt-10">
  <table className="w-full text-sm font-medium leading-4 text-gray-500  max-md:max-w-full">
    <thead>
      <tr className="text-left">
        <th className="py-1 whitespace-nowrap dark:text-white">Title</th>
        <th className="py-1 pr-3 whitespace-nowrap dark:text-white">Question Count <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e94aa16fe86bc0b2c1c1fbb4ee69285eeb475d8691815679f5fec82ed16d83b2?apiKey=8a82faa9db93454483a68c973b38c7b0&" alt="" className="shrink-0 self-start w-3.5 aspect-[1.16]" /></th>
        <th className="py-1 pr-1.5 whitespace-nowrap dark:text-white">Duration <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e94aa16fe86bc0b2c1c1fbb4ee69285eeb475d8691815679f5fec82ed16d83b2?apiKey=8a82faa9db93454483a68c973b38c7b0&" alt="" className="shrink-0 self-start w-3.5 aspect-[1.16]" /></th>
        <th className="py-1 px-px whitespace-nowrap dark:text-white">Attempts <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6012d5da3175afff8eb0151a93cdf9a3faf65c272cbc3f0dfe48c04a900c8afd?apiKey=8a82faa9db93454483a68c973b38c7b0&" alt="" className="shrink-0 self-start w-3.5 aspect-[1.16]" /></th>
        <th className="py-1 pr-1.5 whitespace-nowrap dark:text-white">Status <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6012d5da3175afff8eb0151a93cdf9a3faf65c272cbc3f0dfe48c04a900c8afd?apiKey=8a82faa9db93454483a68c973b38c7b0&" alt="" className="shrink-0 self-start w-3.5 aspect-[1.16]" /></th>
      </tr>
    </thead>
    <tbody>
      {exams.map((exam, index) => (
        <React.Fragment key={index}>
          <tr>
            <td className="dark:text-white">{exam.title}</td>
            <td className="dark:text-white">{exam.questionCount}</td>
            <td className="dark:text-white">{exam.duration}</td>
            <td className="dark:text-white">{exam.attempts}</td>
            <td className="dark:text-white">{exam.status}</td>
          </tr>
          <tr>
            <td colSpan="5"><hr className="shrink-0 mt-2.5 h-px bg-gray-300 border border-gray-300 border-solid max-md:max-w-full" /></td>
          </tr>
        </React.Fragment>
      ))}
    </tbody>
  </table>
</section> 

  );
}

export default ExamList;
