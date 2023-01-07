import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err.message));
  };
  return (
    <header aria-label="Site Header" className="sticky top-0 z-30 bg-[#E7ECEE] border-b border-gray-100">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex="1"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              {user?.email ? (
                <>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleLogOut}
                      to="/login"
                      className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-600"
                    >
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/signup">Signup</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          {/* dropdown end*/}
          <div className="text-2xl font-bold mr-10">
            <span className="text-orange-600">OLDB</span>azaar
          </div>
          <form className="mb-0 hidden lg:flex">
            <div className="relative">
              <input
                className="h-10 rounded-lg border-gray-200 pr-10 text-sm placeholder-gray-300 focus:z-10"
                placeholder="Search..."
                type="text"
              />

              <button
                type="submit"
                className="absolute inset-y-0 right-0 mr-px rounded-r-lg p-2 text-gray-600"
              >
                <span className="sr-only">Submit Search</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </form>
          <nav
            aria-label="Site Nav"
            className="hidden lg:flex lg:gap-8 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500 ml-10"
          >
            <Link
              to="/"
              // className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              className="relative cursor-pointer text-md font-medium before:absolute before:inset-x-0 before:-bottom-1 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-black before:transition-all before:duration-200 hover:before:scale-x-100"
            >
              Home
            </Link>

            <Link
              to="/blogs"
              // className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              className="relative cursor-pointer text-md font-medium before:absolute before:inset-x-0 before:-bottom-1 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-black before:transition-all before:duration-200 hover:before:scale-x-100"
            >
              Blogs
            </Link>
            <Link
              to="/about"
              // className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              className="relative cursor-pointer text-md font-medium before:absolute before:inset-x-0 before:-bottom-1 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-black before:transition-all before:duration-200 hover:before:scale-x-100"
            >
              About
            </Link>
            <Link
              to="/Contact"
              // className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              className="relative cursor-pointer text-md font-medium before:absolute before:inset-x-0 before:-bottom-1 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-black before:transition-all before:duration-200 hover:before:scale-x-100"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <div className="ml-8 flex items-center justify-end">
            <div className="flex items-center divide-x divide-gray-100 border-x border-gray-100">
              {/* list */}
              <div className="hidden items-center gap-4 lg:flex">
                {/* condition */}
                {user?.email ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current lg:font-bold hover:text-red-700"
                    >
                      Dashboard
                    </Link>
                    <Link
                      onClick={handleLogOut}
                      to="/login"
                      className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-600"
                    >
                      Logout
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-600"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white"
                    >
                      Signup
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* sidebar */}
            <label
              htmlFor="dashboard-drawer"
              tabIndex="2"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {/* sidebar end */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
