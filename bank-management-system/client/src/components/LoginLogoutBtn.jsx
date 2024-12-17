import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutService } from "../services/authServices";
import { removeUser } from "../store/userSlice";
import { Link } from "react-router-dom";

const LoginLogoutBtn = () => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  
  const isUserLoggedIn = (user) => {
      return Object.keys(user || {}).length > 0;
  };
    
    const handleLogout = () => {
      setLoading(true);
      logoutService()
        .then((response) => {
          dispatch(removeUser({}));
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };

  return (
    <>
      {isUserLoggedIn(currentUser) ? (
        <button
          onClick={handleLogout}
          className="text-red-500 bg-red-600 bg-opacity-20 rounded-lg text-sm px-4 py-2 text-center"
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </Link>
      )}
    </>
  );
};

export default LoginLogoutBtn;
