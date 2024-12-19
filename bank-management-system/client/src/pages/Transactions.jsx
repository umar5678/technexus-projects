import React, { useEffect, useState } from "react";
import { getAllTransactions } from "../services/accountServices";
import { useDispatch } from "react-redux";
// import {
//   setTransactions,
//   removeTransactions,
// } from "../store/transactionsSlice";
import { Spinner, TransactionCard } from "../components";
import { Link } from "react-router-dom";

const Transactions = () => {
  const dispatch = useDispatch();
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sessionExpiredMessage, setSessionExpiredMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleclick = () => {
    setError("");
    setLoading(true);
    getAllTransactions()
      .then((response) => {
        console.log(response);
        setTransactions(response.data?.data);
        setSuccess(true);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        if (error.response?.status === 403 || error?.status === 403) {
          setSessionExpiredMessage(error.response?.data?.message);
        }
        setError(error.response?.data?.message || error?.message);
        setLoading(false);
      });
  };

  const sortedTransactions = transactions.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB - dateA; // Descending order (newest first)
  });

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      {sessionExpiredMessage && (
        <p className="text-red-500 mt-10">
          {sessionExpiredMessage},{" "}
          <Link to="/login" className="text-blue-500">
            Login Again
          </Link>
        </p>
      )}
      {success && (
        <p className="text-green-500 mt-10">
          Transaction fetched successfully!
          <Link to="/account" className="text-blue-500">
            Go to Dashboard
          </Link>
        </p>
      )}
      {error && <p className="text-red-500 mt-10">{error}</p>}

      <button
        onClick={handleclick}
        className="bg-blue-500  mt-10 text-white dark:bg-opacity-45 px-4 py-2 rounded-md mb-10"
      >
        Get All Transactions
      </button>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="min-w-96 p-2 dark:bg-gray-700 flex-1">
          {transactions.length > 0 &&
            sortedTransactions.map((transaction) => (
              <TransactionCard
                key={transaction._id}
                transaction={transaction}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
