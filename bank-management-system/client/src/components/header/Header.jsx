import React, { useState } from "react";
import ThemeToggleButton from "../ThemeToggleButton";
import { Link, NavLink } from "react-router-dom";
import LoginLogoutBtn from "../LoginLogoutBtn";
import Logo from "../Logo";
import { useSelector } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggllMenu = () => setIsOpen(!isOpen);
   const { currentUser } = useSelector((state) => state.user);

   const isUserLoggedIn = (user) => {
     return Object.keys(user || {}).length > 0;
   };

  const NavLinkClass = ({ isActive }) =>
    `block  md:py-0 duration-200 ${
      isActive
        ? "text-blue-500 bg-blue-500 text-white md:text-blue-500 md:bg-transparent "
        : "dark:text-white dark:hover:text-blue-500"
    } rounded-lg pl-4 mt-0 py-2   lg:p-0`;
    

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Logo />
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <LoginLogoutBtn />

            <button
              onClick={toggllMenu}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${
              isOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  onClick={() => setIsOpen(false)}
                  to="/"
                  className={NavLinkClass}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  onClick={() => setIsOpen(false)}
                  to="/services"
                  className={NavLinkClass}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setIsOpen(false)}
                  to="/contact-us"
                  className={NavLinkClass}
                >
                  Contact
                </NavLink>
              </li>
              {isUserLoggedIn(currentUser) && (
                <>
                  <li>
                    <NavLink
                      onClick={() => setIsOpen(false)}
                      to="/account"
                      className={NavLinkClass}
                    >
                      Account
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      onClick={() => setIsOpen(false)}
                      to="/charts"
                      className={NavLinkClass}
                    >
                      Charts
                    </NavLink>
                  </li>
                </>
              )}
              <li className="pl-2 pt-2 md:pt-0">
                <a href="">
                  <ThemeToggleButton />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
