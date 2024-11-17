import React, { useState } from "react";

const ViewEventDetailsModal = ({ event }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="">
        <button
          onClick={openModal}
          className="block text-gray-900 hover:text-white bg-blue-80 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-300 ease-in-out underline underline-offset-4"
          type="button"
        >
          View Details
        </button>

        {/* Main modal */}
        {isModalOpen && (
          <div
            id="select-modal"
            className="bg-blue-200 bg-opacity-90 flex items-center justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50  w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            onClick={closeModal}
          >
            <div
              className="relative p-4 w-full max-w-2xl h-full md:h-auto max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal content */}
              <div className="w-3xl relative  bg-white rounded-xl shadow ">
                {/* Modal header */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b ">
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900">
                    {event.eventTitle}'s Details
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center"
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
                <div className="p-4 md:p-5 ">
                  <div className="mb-4 ">
                    <h4 className="text-blue-700 text-lg font-semibold text-align-left mb-2">
                      Event Details
                    </h4>
                    <h2 className="text-xl font-semibold my-4">
                      {event.details.fullTitle}
                    </h2>
                    <p> {event.details.longDescription}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-blue-700 text-lg font-semibold text-align-left mb-2">
                      Location
                    </h4>
                    <p>{event.details.fullLocation}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-blue-700 text-lg font-semibold text-align-left mb-2">
                      Date
                    </h4>
                    <p>{event.date}</p>
                  </div>
                  <div className="mb-4 flex  justify-between items-center"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ViewEventDetailsModal;
