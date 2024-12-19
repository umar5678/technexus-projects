import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Refresh from "../components/Refresh";


const Dashboard = () => {
  // refresh btn

  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="flex flex-col items-center  min-h-screen py-2 mt-10">
      <Refresh/>
      <h1 className="text-4xl ">
        Welcome, {`${currentUser?.firstName} ${currentUser?.lastName}`}
      </h1>
      <p className="text-xl mt-8">
        Your Acc:{" "}
        <span className="font-semibold text-2xl">
          {currentUser?.accountNumber}
        </span>{" "}
      </p>
      <div className="text-2xl p-6 mt-10  bg-gray-200 w-fit rounded-lg shadow-md dark:text-white dark:bg-gray-800">
        Your Account Balance: <br />
        <p className="pt-4">{currentUser?.balance}</p>
      </div>

      <div className="flex items-center md:gap-8 flex-col md:flex-row gap-10 max-w-80 mt-16">
        <div>
          <Link
            to="/account/transactions"
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            See Transactions
          </Link>
        </div>
        <div>
          <Link
            to="/account/send-money"
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send Money
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
