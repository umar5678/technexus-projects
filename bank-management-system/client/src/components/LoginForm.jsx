import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginService } from "../services/authServices";

const LoginForm = () => {
    const navigate = useNavigate()
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")
        loginService(formData).then((response) => {
            console.log(response)
        }).catch((err) => {
            console.log(err)
            setError(err.response?.data?.message || err?.message)
            setLoading(false)
        })
    
    console.log(formData);
  };

  return (
      <div>
          {error && (<p className="text-red-500 text-center">
              {error}
          </p>)}
      <form onSubmit={handleSubmit} class="max-w-sm mx-auto">
        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            onChange={handleChange}
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="email"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            onChange={handleChange}
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="flex items-start mb-5">
          <div class="flex items-center h-5"></div>
          <p>
            Not yet Register,{" "}
            <Link to="/signup" className="text-blue-600 dark:text-blue-500">
              Signup here
            </Link>
          </p>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;