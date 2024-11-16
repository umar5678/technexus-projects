import React, { useState } from "react";

const ViewStudentModal = ({ extras, student }) => {
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
          className="block text-gray-900 hover:text-white bg-blue-50 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-300 ease-in-out"
          type="button"
        >
          View Details
        </button>

        {/* Main modal */}
        {isModalOpen && (
          <div
            id="select-modal"
            className="bg-blue-50 bg-opacity-70 flex items-center justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            onClick={closeModal} // Close modal if clicked outside of modal content
          >
            <div
              className="relative p-4 w-full max-w-md max-h-full"
              onClick={(e) => e.stopPropagation()} // Prevent modal from closing if clicked inside the modal
            >
              {/* Modal content */}
              <div className="relative bg-white rounded-xl shadow">
                {/* Modal header */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {student.name}'s Details
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
                <div className="p-4 md:p-5">
                  <div className="mb-4 flex justify-between items-center">
                    <h4 className="text-blue-700 text-lg font-semibold text-align-left">Contact</h4>
                    <ul className=" pl-5 text-gray-700">
                        <li >{student.extras.contact}</li>
                    </ul>
                  </div>
                  <div className="mb-4 flex  justify-between items-center">
                    <h4 className="text-lg font-semibold text-blue-700">Hobbies</h4>
                    <ul className="list-disc pl-5 text-gray-700">
                      {student.extras.hobbies.map((hobby, index) => (
                        <li key={index}>{hobby}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ViewStudentModal;
