import { useEffect, useState } from "react";
import { Wallet, columns } from "./wallet-columns";
import DataTable from "../../Table/data-ttable";

function getData(): Promise<Wallet[]> {
  
  return fetch('http://localhost:5000/api/wallet')
    .then(response => response.json());
}

export default function WalletTable() {
  const [data, setData] = useState<Wallet[]>([]);
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
