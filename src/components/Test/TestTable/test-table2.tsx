import { useEffect, useState } from "react";
import { Test, columns } from "./test-columns";
import DataTable from "../../Table/data-ttable";
import ExamModal from "./test-modal"; // Import your modal component

function getData(): Promise<Test[]> {
    return Promise.resolve([
        {
          id: "456def",
          title: "React Fundamentals",
          questioncount: 15,
          duration: 45,
          attempts: 3,
          status: "pending",
        },
        {
          id: "789ghi",
          title: "Advanced CSS",
          questioncount: 12,
          duration: 40,
          attempts: 2,
          status: "pending",
        },
        {
          id: "101jkl",
          title: "Node.js Overview",
          questioncount: 8,
          duration: 25,
          attempts: 4,
          status: "success",
        },
        {
          id: "112mno",
          title: "Python for Beginners",
          questioncount: 20,
          duration: 50,
          attempts: 6,
          status: "failed",
        },
        {
          id: "131pqr",
          title: "SQL Queries",
          questioncount: 10,
          duration: 30,
          attempts: 1,
          status: "pending",
        },
      ]);
      return fetch("http://localhost:5000/api/tests").then((response) =>
        response.json()
      );
}

export default function TestTable() {
  const [data, setData] = useState<Test[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-10">
      <DataTable
        columns={columns}
        searchcolumn="title"
        data={data}
        ModalComponent={ExamModal} // Pass the modal component
      />
    </div>
  );
}
