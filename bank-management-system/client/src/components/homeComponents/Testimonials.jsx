import { useEffect, useState } from "react";
import { getReviews } from "../../services/accountServices";
import TestimonialCard from "../cards/TestimonialCard";
import Spinner from "../Spinner";

const Testimonials = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setError("");
    setLoading(true);
    getReviews()
      .then((res) => {
        // console.log(res);
        setReviews(res.data?.data);
        setError("");
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        setError(err.response?.data?.message || err?.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Testimonials
          </h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"></p>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          {loading ? (
            <Spinner />
          ) : error ? (
            <p className="text-red-500 mt-10">{error}</p>
          ) : (
            reviews.map((review) => (
              <TestimonialCard review={review} key={review._id} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
