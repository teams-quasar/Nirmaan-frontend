import { useEffect, useState } from "react";
import { Wallet, columns } from "./wallet-columns";
import DataTable from "../../Table/data-ttable";

function getData(): Promise<Wallet[]> {
  return Promise.resolve([
    { 
      id: "131pgr",
      title: "Some Generic Medium Title - 2",
      amount: 2000,
      type: "Credit",
      timestamp: "10:00PM, 24 Mar",
      status: "pending",
      statusIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/174a3009282e3a9f6b5606a3ce99ae7bc29805dddd0c10837ada9398c4fe7500?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    },
    { 
      id: "13asqr",
      title: "Small Title - 1",
      amount: 500,
      type: "Expenditure",
      timestamp: "04:05AM, 2 Feb",
      status: "pending",
      statusIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bb05e8fb80ee028da22b22457af14d7739f89c1ba41f6317b131095f1449fd31?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    },
    { 
      id: "1awgqr",
      title: "Some Generic Long Title which has extra words - 2",
      amount: 1000,
      type: "Debit",
      timestamp: "12:44PM, 9 Jan",
      status: "success",
      statusIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dc3a4dc5af2a849a3436479ad4ce94c5887b77104deb52713416bf13778a1385?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    },
    { 
      id: "13r7hr",
      title: "Some Generic Medium Title - 2",
      amount: 500,
      type: "Credit",
      timestamp: "08:20PM, 25 Dec",
      status: "failed",
      statusIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ab2d99e3c96dda62b15a65d530450f015185f0837c30ad4737834735670b1bee?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    },
    { 
      id: "1acbyr",
      title: "Some Generic Medium Title - 2",
      amount: 1000,
      type: "Credit",
      timestamp: "06:11PM, 16 Dec",
      status: "pending",
      statusIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4ea9c5395539cdd975bc9aa8147806c99d2fff4741e0c3b569417afef434450f?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    },
  ]);
  // return fetch('http://localhost:5000/api/wallet')
  //   .then(response => response.json());
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
