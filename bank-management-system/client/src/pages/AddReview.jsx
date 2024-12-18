import React, { useState } from "react";
import { addReview } from "../services/accountServices";
import { Spinner } from "../components";
import { Link } from "react-router-dom";

const AddReview = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sessionExpiredMessage, setSessionExpiredMessage] = useState("");
  const [formData, setFormData] = useState({
    review: "",
    name: "",
    company: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    addReview(formData)
      .then((res) => {
        // console.log(res);

        setSuccess(true);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        if (error.response?.status === 403 || error?.status === 403) {
          setSessionExpiredMessage(error.response?.data?.message);
        }
        setError(err.response?.data?.message || err?.message);
        setLoading(false);
      });

    // Clear the form fields
    setFormData({
      review: "",
      name: "",
      company: "",
    });
  };
  if (loading) return <Spinner />;

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
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
              review added successfully!
              <Link to="/account" className="text-blue-500">
                Go to Dashboard
              </Link>
            </p>
          )}
          {error && <p className="text-red-500 mt-10">{error}</p>}
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Add a review
          </h2>

          <form action="#" onSubmit={handleSubmit} className="space-y-8">
            <div className="sm:col-span-2">
              <label
                htmlFor="review"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your Feedback
              </label>
              <textarea
                onChange={handleChange}
                id="review"
                rows="6"
                value={formData.review} // Bind the value to the state
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a review..."
                required
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="name"
                value={formData.name} // Bind the value to the state
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Company
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="company"
                value={formData.company} // Bind the value to the state
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder=""
                required
              />
            </div>

            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddReview;
