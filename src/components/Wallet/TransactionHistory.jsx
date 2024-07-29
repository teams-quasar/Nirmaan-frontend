
import React from "react";
import TransactionItem from "./TransactionItem";

const transactions = [
  {
    title: "Some Generic Medium Title - 2",
    amount: 2000,
    type: "Credit",
    timestamp: "10:00PM, 24 Mar",
    status: "Completed",
    statusIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/174a3009282e3a9f6b5606a3ce99ae7bc29805dddd0c10837ada9398c4fe7500?apiKey=8a82faa9db93454483a68c973b38c7b0&",
  },
  {
    title: "Small Title - 1",
    amount: 500,
    type: "Expenditure",
    timestamp: "04:05AM, 2 Feb",
    status: "Completed",
    statusIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bb05e8fb80ee028da22b22457af14d7739f89c1ba41f6317b131095f1449fd31?apiKey=8a82faa9db93454483a68c973b38c7b0&",
  },
  {
    title: "Some Generic Long Title which has extra words - 2",
    amount: 1000,
    type: "Debit",
    timestamp: "12:44PM, 9 Jan",
    status: "Completed",
    statusIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dc3a4dc5af2a849a3436479ad4ce94c5887b77104deb52713416bf13778a1385?apiKey=8a82faa9db93454483a68c973b38c7b0&",
  },
  {
    title: "Some Generic Medium Title - 2",
    amount: 500,
    type: "Credit",
    timestamp: "08:20PM, 25 Dec",
    status: "Failed",
    statusIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ab2d99e3c96dda62b15a65d530450f015185f0837c30ad4737834735670b1bee?apiKey=8a82faa9db93454483a68c973b38c7b0&",
  },
  {
    title: "Some Generic Medium Title - 2",
    amount: 1000,
    type: "Credit",
    timestamp: "06:11PM, 16 Dec",
    status: "Pending",
    statusIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4ea9c5395539cdd975bc9aa8147806c99d2fff4741e0c3b569417afef434450f?apiKey=8a82faa9db93454483a68c973b38c7b0&",
  },
];

function TransactionHistory() {
  return (
    <section className="mt-12 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 justify-between self-center w-full text-sm font-medium leading-4 text-gray-500 max-w-[1064px] max-md:flex-wrap max-md:max-w-full">
        <div className="justify-center py-1">Transaction History</div>
        <div className="flex gap-5 justify-between whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-1.5 px-px py-1">
            <div>Amount</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1846e3d0112b80501482780e0b72f8e1e4ec32353f27ffd92add68216e2f7a03?apiKey=8a82faa9db93454483a68c973b38c7b0&"
              alt=""
              className="shrink-0 self-start w-3.5 aspect-[1.16]"
            />
          </div>
          <div className="flex gap-1.5 py-1 pr-2">
            <div>Type</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e94aa16fe86bc0b2c1c1fbb4ee69285eeb475d8691815679f5fec82ed16d83b2?apiKey=8a82faa9db93454483a68c973b38c7b0&"
              alt=""
              className="shrink-0 self-start w-3.5 aspect-[1.16]"
            />
          </div>
          <div className="flex gap-1.5 py-1 pr-1.5">
            <div>Timestamp</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6012d5da3175afff8eb0151a93cdf9a3faf65c272cbc3f0dfe48c04a900c8afd?apiKey=8a82faa9db93454483a68c973b38c7b0&"
              alt=""
              className="shrink-0 self-start w-3.5 aspect-[1.16]"
            />
          </div>
          <div className="flex gap-1.5 py-1 pr-1.5">
            <div>Status</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6012d5da3175afff8eb0151a93cdf9a3faf65c272cbc3f0dfe48c04a900c8afd?apiKey=8a82faa9db93454483a68c973b38c7b0&"
              alt=""
              className="shrink-0 self-start w-3.5 aspect-[1.16]"
            />
          </div>
        </div>
      </div>
      <hr className="shrink-0 mt-2.5 h-px bg-gray-300 border border-gray-300 border-solid max-md:max-w-full dark:bg-black dark:text-white" />
      {transactions.map((transaction, index) => (
        <React.Fragment key={index}>
          <TransactionItem {...transaction} />
          <hr className="shrink-0 mt-2.5 h-px bg-gray-300 border border-gray-300 border-solid max-md:max-w-full" />
        </React.Fragment>
      ))}
    </section>
  );
}

export default TransactionHistory;
