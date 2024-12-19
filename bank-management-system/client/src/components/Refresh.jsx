import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser, removeUser } from "../store/userSlice";
import { refresh } from "../services/accountServices";
import { Link } from "react-router-dom";

const Refresh = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sessionExpiredMessage, setSessionExpiredMessage] = useState("");

  const dispatch = useDispatch();

  const refreshUser = () => {
    setError("");
    setLoading(true);
    refresh()
      .then((response) => {
        // dispatch(removeUser());
        dispatch(setUser(response.data?.data));
        setLoading(false);
        setSuccess(true);
      })
      .catch((error) => {
        setLoading(false);
        if (error.response?.status === 403 || error?.status === 403) {
          setSessionExpiredMessage(error.response?.data?.message);
        }
        setError(error.response?.data?.message || error?.message);
        dispatch(removeUser());
      });
  };
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
      {success && <p className="text-green-500 mt-10">Refreshed</p>}
      {error && <p className="text-red-500 mt-10">{error}</p>}
      <button
        onClick={refreshUser}
        className="bg-blue-500  text-white dark:bg-opacity-45 px-4 py-2 rounded-md mb-10"
      >
        {loading ? "Loading..." : "Refresh"}
      </button>
    </div>
  );
};

export default Refresh;
