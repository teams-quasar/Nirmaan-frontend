import { useEffect, useState } from "react";
import { Test, columns } from "./test-columns";
import DataTable from "../Table/data-ttable";

function getData(): Promise<Test[]> {
  
  return fetch('http://localhost:5000/api/tests')
    .then(response => response.json());
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
    <div className=" py-10">
      <DataTable columns={columns} searchcolumn="title" data={data} />
    </div>
  );
}
