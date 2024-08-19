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
    },
    {
      id: "a3f8e1b9",
      amount: 150,
      status: "pending",
      email: "a@example.com"
    },
    {
      id: "b7c4d6e3",
      amount: 200,
      status: "pending",
      email: "b@example.com"
    },
    {
      id: "d5a9f2c7",
      amount: 250,
      status: "pending",
      email: "c@example.com"
    },
    {
      id: "e2c6b4a1",
      amount: 300,
      status: "pending",
      email: "d@example.com"
    },
    {
      id: "f9b1d8e5",
      amount: 350,
      status: "pending",
      email: "e@example.com"
    },
    
      {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "a9bcd4ef",
        amount: 150,
        status: "success",
        email: "john.doe@example.com",
      },
      {
        id: "c5d3f2b8",
        amount: 200,
        status: "failed",
        email: "jane.smith@example.com",
      },
      {
        id: "e4a7c6d3",
        amount: 120,
        status: "pending",
        email: "alex.brown@example.com",
      },
      {
        id: "f1b8a7c6",
        amount: 300,
        status: "success",
        email: "emily.jones@example.com",
      },
      {
        id: "d2c9e4f5",
        amount: 50,
        status: "failed",
        email: "michael.clark@example.com",
      },
      {
        id: "g3h2i5k7",
        amount: 80,
        status: "pending",
        email: "sarah.davis@example.com",
      },
      {
        id: "h7i3k4m5",
        amount: 170,
        status: "success",
        email: "daniel.martin@example.com",
      },
      {
        id: "i8k5m6n7",
        amount: 90,
        status: "failed",
        email: "chris.lee@example.com",
      },
      {
        id: "j9l8n7p6",
        amount: 220,
        status: "pending",
        email: "lisa.white@example.com",
      },
      {
        id: "k2m7o8q5",
        amount: 130,
        status: "success",
        email: "kevin.hall@example.com",
      },
      {
        id: "l4p9q8r7",
        amount: 250,
        status: "failed",
        email: "olivia.king@example.com",
      },
      {
        id: "m5q6r8s4",
        amount: 140,
        status: "pending",
        email: "james.scott@example.com",
      },
      {
        id: "n6r7s5t3",
        amount: 160,
        status: "success",
        email: "maria.walker@example.com",
      },
      {
        id: "o7t8u6v4",
        amount: 110,
        status: "failed",
        email: "william.harris@example.com",
      },
      {
        id: "p8v6w5x3",
        amount: 180,
        status: "pending",
        email: "ava.young@example.com",
      },
      {
        id: "q9x7y8z2",
        amount: 60,
        status: "success",
        email: "david.thomas@example.com",
      },
      {
        id: "r1y8z9a3",
        amount: 190,
        status: "failed",
        email: "sophia.roberts@example.com",
      },
      {
        id: "s2a9b8c4",
        amount: 210,
        status: "pending",
        email: "jackson.evans@example.com",
      },
      {
        id: "t3b7c9d2",
        amount: 240,
        status: "success",
        email: "mia.wilson@example.com",
      }
    
    
    
    // Add more sample data as needed
  ]);
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
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
