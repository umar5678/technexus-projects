import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-blue-100 py-8 px-4 lg:px-16 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Subscribe</h2>
      <p className="text-gray-700 mb-6">
        Stay updated with our latest news and events.
      </p>
      <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 border rounded-lg w-full sm:w-auto"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
