import React from 'react'
import { MdSchool } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Container from '../components/container/Container'

const Login = () => {
  return (
    <Container>
      <div>
        <section className="bg-white">
          <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            

            <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
              <div className="max-w-xl lg:max-w-3xl">
                <a className="block text-blue-600" href="#">
                  <span className="text-6xl">
                    <MdSchool />
                  </span>
                </a>

                <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome Back<span className="text-blue-700">.</span>
                </h1>

                

                <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                  

                  

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

                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                      Login
                    </button>

                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                      Not Enrolled yet?
                      <Link to="/enrollment" className="text-blue-700 text-lg underline">
                          Enroll
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
}

export default Login