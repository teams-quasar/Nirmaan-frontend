
import React from "react";
import Sidebar from "./Sidebar";
import ResultsHeader from "./ResultsHeader";
import ResultAnalysis from "./ResultAnalysis";
import PerformanceChart from "./PerformanceChart";
import QuestionStatistics from "./QuestionStatistics";
import AnswerKeySection from "./AnswerKeySection";

function ResultsPage() {
  return (
    <div className="flex gap-5 items-start pb-20 bg-neutral-100 max-md:flex-wrap">
      <Sidebar />
      <div className="flex flex-col grow shrink-0 self-end mt-10 basis-0 w-fit max-md:max-w-full">
        <ResultsHeader />
        <ResultAnalysis />
        <AnswerKeySection />
      </div>
    </div>
  );
}

export default ResultsPage;
