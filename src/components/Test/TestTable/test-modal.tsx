import * as React from "react";
import TestComponent from "../TestComponent/TestComponent";

interface TestModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any; // Define a proper type based on your data
}

const ExamModal: React.FC<TestModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className=" absolute inset-y-0 right-0 w-full max-w-xl overflow-auto z-50">
        <div className=" bg-black/20 " onClick={onClose}></div>
        
          <div className="">
           
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-blue-700 text-white rounded"
            >
              Closeee
            </button>
            <TestComponent />
          </div>
       
      </div>
    </>
  );
};

export default ExamModal;
 {/* <h2 className="text-xl font-semibold mb-4">Exam Details</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre> */}