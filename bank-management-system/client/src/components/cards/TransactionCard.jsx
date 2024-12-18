import React from "react";
import moment from "moment"; // Import moment for date formatting

const TransactionCard = ({ transaction }) => {
    const { amount, createdAt, from, to, transactionType } = transaction;
    console.log(transaction);

  const transactionDate = moment(createdAt).format("DD-MM-YYYY hh:mm A");
  const transactionClass =
    transactionType === "send"
      ? " text-orange-500"
      : " text-green-500";

  return (
    <div className="p-4 rounded-lg shadow-md mb-4">
      <div className={`flex justify-between items-center ${transactionClass}`}>
        <span className="font-semibold">{transactionType.toUpperCase()}</span>
        <span>{transactionDate}</span>
      </div>
      <div className="mt-2">
        <p className="text-sm">From: {from}</p>
        <p className="text-sm">To: {to}</p>
        <p className="text-lg font-semibold">Amount: {amount}</p>
      </div>
    </div>
  );
};

export default TransactionCard;
