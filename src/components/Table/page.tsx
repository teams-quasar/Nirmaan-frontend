import { useEffect, useState } from "react";
import { Payment, columns } from "./columns";
import DataTable from "./data-ttable";

function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
   return Promise.resolve([
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    name: "Michael",
  },
  {
    id: "a3f8e1b9",
    amount: 150,
    status: "pending",
    email: "a@example.com",
    name: "Alice",
  },
  {
    id: "b7c4d6e3",
    amount: 200,
    status: "pending",
    email: "b@example.com",
    name: "Bob",
  },
  {
    id: "d5a9f2c7",
    amount: 250,
    status: "pending",
    email: "c@example.com",
    name: "Charlie",
  },
  {
    id: "e2c6b4a1",
    amount: 300,
    status: "pending",
    email: "d@example.com",
    name: "David",
  },
  {
    id: "f9b1d8e5",
    amount: 350,
    status: "pending",
    email: "e@example.com",
    name: "Emma",
  },
  {
    id: "a9bcd4ef",
    amount: 150,
    status: "success",
    email: "john.doe@example.com",
    name: "John",
  },
  {
    id: "c5d3f2b8",
    amount: 200,
    status: "failed",
    email: "jane.smith@example.com",
    name: "Jane",
  },
  {
    id: "e4a7c6d3",
    amount: 120,
    status: "pending",
    email: "alex.brown@example.com",
    name: "Alex",
  },
]);
  // return fetch('http://localhost:5000/api/payments')
  //   .then(response => response.json());
}

export default function DemoPage() {
  const [data, setData] = useState<Payment[]>([]);
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
      <DataTable columns={columns} searchcolumn="email" data={data} />
    </div>
  );
}
