import React, { useState } from "react";
import faqData from "../../json-data/faqData.json"

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the active accordion
    } else {
      setActiveIndex(index); // Open the clicked accordion
    }
  };

  return (
      <div className="max-w-6xl mx-auto py-10">
          <h1 className="text-blue-700 text-3xl font-bold text-center pb-5" > Frequently Asked Questions</h1>
          {faqData.map((faq, index) => (
        <div key={index}>
          <h2 id={`accordion-flush-heading-${index}`}>
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium text-gray-500 border-b border-gray-200 gap-3"
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index ? "true" : "false"}
              aria-controls={`accordion-flush-body-${index}`}
            >
              <span>{faq.question}</span>
              <svg
                className={`w-3 h-3 transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5L5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-flush-body-${index}`}
            className={activeIndex === index ? "block" : "hidden"}
            aria-labelledby={`accordion-flush-heading-${index}`}
          >
            <div className="py-5 border-b border-gray-200">
              <p className="mb-2 text-gray-500">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
