import React, { useState } from "react";
import { MdSchool } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl 2xl:max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <MdSchool className="text-3xl text-blue-600" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Student <span className="text-blue-600">.</span>
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Login
          </button>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <NavLink
                to="/departments"
                className={({ isActive }) =>
                  `block py-2 px-3 text-gray-900 ${
                    isActive
                      ? "md:text-blue-700 bg-blue-700 md:bg-transparent text-white"
                      : "text-gray-900"
                  }  rounded md:bg-transparent md:hover:text-blue-700 md:p-0`
                }
                onClick={() => setIsOpen(false)}
              >
                Departments
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/students"
                className={({ isActive }) =>
                  `block py-2 px-3 text-gray-900 ${
                    isActive
                      ? "md:text-blue-700 bg-blue-700 md:bg-transparent text-white"
                      : "text-gray-900"
                  }  rounded md:bg-transparent md:hover:text-blue-700 md:p-0`
                }
                onClick={() => setIsOpen(false)}
              >
                Students
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/enrollment"
                className={({ isActive }) =>
                  `block py-2 px-3 text-gray-900 ${
                    isActive
                      ? "md:text-blue-700 bg-blue-700 md:bg-transparent text-white"
                      : "text-gray-900"
                  }  rounded md:bg-transparent md:hover:text-blue-700 md:p-0`
                }
                onClick={() => setIsOpen(false)}
              >
                Enroll
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 px-3 text-gray-900 ${
                    isActive
                      ? "md:text-blue-700 bg-blue-700 md:bg-transparent text-white"
                      : "text-gray-900"
                  }  rounded md:bg-transparent md:hover:text-blue-700 md:p-0`
                }
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  `block py-2 px-3 text-gray-900 ${
                    isActive
                      ? "md:text-blue-700 bg-blue-700 md:bg-transparent text-white"
                      : "text-gray-900"
                  }  rounded md:bg-transparent md:hover:text-blue-700 md:p-0`
                }
                onClick={() => setIsOpen(false)}
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/achievements"
                className={({ isActive }) =>
                  `block py-2 px-3 text-gray-900 ${
                    isActive
                      ? "md:text-blue-700 bg-blue-700 md:bg-transparent text-white"
                      : "text-gray-900"
                  }  rounded md:bg-transparent md:hover:text-blue-700 md:p-0`
                }
                onClick={() => setIsOpen(false)}
              >
                Awards
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
