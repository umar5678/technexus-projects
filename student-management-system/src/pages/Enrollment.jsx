import React from "react";
import { MdSchool } from "react-icons/md";
import { Link } from "react-router-dom";
import Container from "../components/container/Container";

const Enrollment = () => {
  return (
    <Container>
      <div>
        <section className="bg-white">
          <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </aside>

            <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
              <div className="max-w-xl lg:max-w-3xl">
                <a className="block text-blue-600" href="#">
                  <span className="text-6xl">
                    <MdSchool />
                  </span>
                </a>

                <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome, Student <span className="text-blue-700">.</span>
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
                </p>

                <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="FirstName"
                      className="text-lg block font-medium text-gray-700"
                    >
                      First Name
                    </label>

                    <input
                      required
                      type="text"
                      id="FirstName"
                      name="first_name"
                      className="h-8 outline-none mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="LastName"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Last Name
                    </label>

                    <input
                      required
                      type="text"
                      id="LastName"
                      name="last_name"
                      className="h-8 outline-none  mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="Email"
                      className="block text-lg font-medium text-gray-700"
                    >
                      {" "}
                      Email{" "}
                    </label>

                    <input
                      required
                      type="email"
                      id="Email"
                      name="email"
                      className="h-8 outline-none  mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="Grade"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Grade
                    </label>

                    <select
                      required
                      id="Grade"
                      name="grade"
                      className="h-8 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm outline-none"
                    >
                      <option value="">Select Grade</option>
                      {[...Array(12)].map((_, index) => (
                        <option key={index} value={index + 1}>
                          Grade {index + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="Password"
                      className="block text-lg font-medium text-gray-700"
                    >
                      {" "}
                      Password{" "}
                    </label>

                    <input
                    required
                      type="password"
                      id="Password"
                      name="password"
                      className="h-8 outline-none  mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="PasswordConfirmation"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Password Confirmation
                    </label>

                    <input
                      required
                      type="password"
                      id="PasswordConfirmation"
                      name="password_confirmation"
                      className="h-8 outline-none  mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <p className="text-sm text-gray-500">
                      By creating an account, you agree to our
                      <a href="#" className="text-gray-700 underline">
                        {" "}
                        terms and conditions{" "}
                      </a>
                      and
                      <a href="#" className="text-gray-700 underline">
                        privacy policy
                      </a>
                      .
                    </p>
                  </div>

                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                      Create an account
                    </button>

                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                      Already have an account?
                      <Link to="/login" className="text-blue-700 text-lg underline">
                        Log in
                      </Link>
                      .
                    </p>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default Enrollment;





