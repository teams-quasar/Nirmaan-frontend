 
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
    
    // <section className="mt-10">
    //   <div className="flex gap-5 justify-between self-center w-full text-sm font-medium leading-4 text-gray-500 max-w-[1061px] max-md:flex-wrap max-md:max-w-full">
    //     <div className="justify-center py-1 whitespace-nowrap">Title</div>
    //     <div className="flex gap-5 justify-between max-md:flex-wrap">
    //       <div className="flex gap-1.5 py-1 pr-3">
    //         <div>Question Count</div>
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/e94aa16fe86bc0b2c1c1fbb4ee69285eeb475d8691815679f5fec82ed16d83b2?apiKey=8a82faa9db93454483a68c973b38c7b0&"
    //           alt=""
    //           className="shrink-0 self-start w-3.5 aspect-[1.16]"
    //         />
    //       </div>
    //       <div className="flex gap-1.5 py-1 pr-1.5 whitespace-nowrap">
    //         <div>Duration</div>
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/e94aa16fe86bc0b2c1c1fbb4ee69285eeb475d8691815679f5fec82ed16d83b2?apiKey=8a82faa9db93454483a68c973b38c7b0&"
    //           alt=""
    //           className="shrink-0 self-start w-3.5 aspect-[1.16]"
    //         />
    //       </div>
    //       <div className="flex gap-1.5 px-px py-1 whitespace-nowrap">
    //         <div>Attempts</div>
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/6012d5da3175afff8eb0151a93cdf9a3faf65c272cbc3f0dfe48c04a900c8afd?apiKey=8a82faa9db93454483a68c973b38c7b0&"
    //           alt=""
    //           className="shrink-0 self-start w-3.5 aspect-[1.16]"
    //         />
    //       </div>
    //       <div className="flex gap-1.5 py-1 pr-1.5 whitespace-nowrap">
    //         <div>Status</div>
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/6012d5da3175afff8eb0151a93cdf9a3faf65c272cbc3f0dfe48c04a900c8afd?apiKey=8a82faa9db93454483a68c973b38c7b0&"
    //           alt=""
    //           className="shrink-0 self-start w-3.5 aspect-[1.16]"
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <hr className="shrink-0 mt-2.5 h-px bg-gray-300 border border-gray-300 border-solid max-md:max-w-full" />
    //   {exams.map((exam, index) => (
    //     <React.Fragment key={index}>
    //       <ExamItem {...exam} />
    //       <hr className="shrink-0 mt-2.5 h-px bg-gray-300 border border-gray-300 border-solid max-md:max-w-full" />
    //     </React.Fragment>
    //   ))}
    // </section>
//     <section className="mt-10">
//   <table className="w-full text-sm font-medium leading-4 text-gray-500  max-md:max-w-full">
//     <thead>
//       <tr className="text-left">
//         <th className="py-1 whitespace-nowrap">Title</th>
//         <th className="py-1 pr-3 whitespace-nowrap">Question Count <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e94aa16fe86bc0b2c1c1fbb4ee69285eeb475d8691815679f5fec82ed16d83b2?apiKey=8a82faa9db93454483a68c973b38c7b0&" alt="" className="shrink-0 self-start w-3.5 aspect-[1.16]" /></th>
//         <th className="py-1 pr-1.5 whitespace-nowrap">Duration <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e94aa16fe86bc0b2c1c1fbb4ee69285eeb475d8691815679f5fec82ed16d83b2?apiKey=8a82faa9db93454483a68c973b38c7b0&" alt="" className="shrink-0 self-start w-3.5 aspect-[1.16]" /></th>
//         <th className="py-1 px-px whitespace-nowrap">Attempts <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6012d5da3175afff8eb0151a93cdf9a3faf65c272cbc3f0dfe48c04a900c8afd?apiKey=8a82faa9db93454483a68c973b38c7b0&" alt="" className="shrink-0 self-start w-3.5 aspect-[1.16]" /></th>
//         <th className="py-1 pr-1.5 whitespace-nowrap">Status <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6012d5da3175afff8eb0151a93cdf9a3faf65c272cbc3f0dfe48c04a900c8afd?apiKey=8a82faa9db93454483a68c973b38c7b0&" alt="" className="shrink-0 self-start w-3.5 aspect-[1.16]" /></th>
//       </tr>
//     </thead>
//     <tbody>
//       {exams.map((exam, index) => (
//         <React.Fragment key={index}>
//           <ExamItem {...exam} />
//           <tr>
//             <td colSpan="5"><hr className="shrink-0 mt-2.5 h-px bg-gray-300 border border-gray-300 border-solid max-md:max-w-full" /></td>
//           </tr>
//         </React.Fragment>
//       ))}
//     </tbody>
//   </table>
// </section>
/* <section className="mt-10">
  <table className="w-full text-sm font-medium leading-4 text-gray-500  max-md:max-w-full">
    <thead>
      <tr className="text-left">
        <th className="py-1 whitespace-nowrap">Title</th>
        <th className="py-1 pr-3 whitespace-nowrap">Question Count</th>
        <th className="py-1 pr-1.5 whitespace-nowrap">Duration</th>
        <th className="py-1 px-px whitespace-nowrap">Attempts</th>
        <th className="py-1 pr-1.5 whitespace-nowrap">Status</th>
      </tr>
    </thead>
    <tbody>
      {exams.map((exam, index) => (
        <React.Fragment key={index}>
          <tr>
            <td className="py-1 whitespace-nowrap">{exam.title}</td>
            <td className="py-1 pr-3 whitespace-nowrap">{exam.questionCount} <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e94aa16fe86bc0b2c1c1fbb4ee69285eeb475d8691815679f5fec82ed16d83b2?apiKey=8a82faa9db93454483a68c973b38c7b0&" alt="" className="shrink-0 self-start w-3.5 aspect-[1.16]" /></td>
            <td className="py-1 pr-1.5 whitespace-nowrap">{exam.duration} <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e94aa16fe86bc0b2c1c1fbb4ee69285eeb475d8691815679f5fec82ed16d83b2?apiKey=8a82faa9db93454483a68c973b38c7b0&" alt="" className="shrink-0 self-start w-3.5 aspect-[1.16]" /></td>
            <td className="py-1 px-px whitespace-nowrap">{exam.attempts} <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6012d5da3175afff8eb0151a93cdf9a3faf65c272cbc3f0dfe48c04a900c8afd?apiKey=8a82faa9db93454483a68c973b38c7b0&" alt="" className="shrink-0 self-start w-3.5 aspect-[1.16]" /></td>
            <td className="py-1 pr-1.5 whitespace-nowrap">{exam.status} <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6012d5da3175afff8eb0151a93cdf9a3faf65c272cbc3f0dfe48c04a900c8afd?apiKey=8a82faa9db93454483a68c973b38c7b0&" alt="" className="shrink-0 self-start w-3.5 aspect-[1.16]" /></td>
          </tr>
          <tr>
            <td colSpan="5"><hr className="shrink-0 mt-2.5 h-px bg-gray-300 border border-gray-300 border-solid max-md:max-w-full" /></td>
          </tr>
        </React.Fragment>
      ))}
    </tbody>
  </table>
</section> */

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
