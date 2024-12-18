import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sendMoney } from "../services/accountServices";
import { setUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { Spinner } from "../components";

const SendMoney = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    receiverAccountNumber: "",
    amount: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sessionExpiredMessage, setSessionExpiredMessage] = useState("");
  console.log(error);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    sendMoney(formData)
      .then((response) => {
        // console.log(response);
        dispatch(setUser(response.data?.data));
        setSuccess(true);

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        if (error.response?.status === 403 || error?.status === 403) {
          setSessionExpiredMessage(error.response?.data?.message);
          
        }
        setError(error.response?.data?.message || error?.message);
      });

    // // Clear the form fields
    setFormData({
      receiverAccountNumber: "",
      amount: "",
    });
  };
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="flex flex-col items-center  min-h-screen py-2 mt-16">
      <h1 className="md:text-4xl  text-2xl">Send Money to other accounts</h1>
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
          Money sent successfully!
          <Link to="/account" className="text-blue-500">
            Go to Dashboard
          </Link>
        </p>
      )}
      {error && <p className="text-red-500 mt-10">{error}</p>}
      <form onSubmit={handleSubmit} class="max-w-sm mx-auto mt-10">
        <div class="mb-5">
          <label
            for="receiverAccountNumber "
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Account Number
          </label>
          <input
            onChange={handleChange}
            value={formData.receiverAccountNumber}
            type="text"
            id="receiverAccountNumber"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="bank-"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="amount"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Amount
          </label>
          <input
            onChange={handleChange}
            value={formData.amount}
            type="number"
            id="amount"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="flex items-start mb-5"></div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMoney;
