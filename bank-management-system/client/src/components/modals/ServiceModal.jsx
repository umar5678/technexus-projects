import React, { useState } from "react";

const ServiceModal = ({ service }) => {
  // State to manage the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Modal toggle */}
      <div className="">
        <button
          onClick={openModal} // Open the modal on click
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          type="button"
        >
          Read More
        </button>

        {/* Main modal */}
        {isModalOpen && (
          <div
            id="select-modal"
            className="bg-stone-950 bg-opacity-90  flex items-center justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50  w-full md:inset-0 h-[calc(100%)] max-h-screen " 
            onClick={closeModal} // Close modal if clicked outside of modal content
          >
            <div
              className="relative p-4 w-full max-w-xl max-h-full "
              onClick={(e) => e.stopPropagation()} // Prevent modal from closing if clicked inside the modal
            >
              {/* Modal content */}
              <div className="relative dark:bg-slate-800 bg-zinc-100 rounded-lg shadow-lg">
                {/* Modal header */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                    {service.name}
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400  bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center"
                    onClick={closeModal} // Close the modal on click
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                {/* Modal body */}
                <div className="p-6 space-y-4">
                  {/* Service Image */}
                  <img
                    className="rounded-lg mb-4 "
                    src={service.image}
                    alt={service.name}
                  />

                  {/* Service Description */}
                  <p className="text-gray-800 dark:text-white font-semibold">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <h4 className="text-base font-semibold mb-2">Benefits</h4>
                  <ul className="list-disc pl-4">
                    {service.additionDetails.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="text-gray-700 dark:text-gray-100"
                      >
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {/* FAQs */}
                  <h4 className="text-base font-semibold mb-2 ">FAQs</h4>
                  <ul className="list-disc pl-4">
                    {service.additionDetails.faqs.map((faq, index) => (
                      <li
                        key={index}
                        className="text-gray-700 dark:text-gray-100"
                      >
                        {faq}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ServiceModal;
