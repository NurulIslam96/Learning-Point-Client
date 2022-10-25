import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [openBar, setOpenBar] = React.useState(false);
  return (
    <div className="shadow-lg shadow-blue-100">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Learning Point"
            title="Learning Point"
            className="inline-flex items-center"
          >
            <img
              src="https://freesvg.org/img/1519501415.png"
              alt="Learning Point"
              width={'40px'}
            />
            <div className="flex flex-col ml-2 hover:text-blue-600 text-blue-900 transition-colors duration-200">
              <span className="text-2xl font-bold tracking-wide uppercase">
                Learning Point
              </span>
              <small className="font-bold">Easy Way to Learn</small>
            </div>
          </Link>
          <ul className="flex hidden items-center space-x-8 lg:flex">
            <li>
              <Link
                to="/courses"
                aria-label="courses"
                title="courses"
                className="font-medium tracking-wide text-blue-900 transition-colors duration-200 hover:text-blue-600 hover:underline-offset-1"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                aria-label="faq"
                title="faq"
                className="font-medium hover:text-blue-600 tracking-wide text-blue-900 transition-colors duration-200"
              >
                <div className="relative p-3">
                  <p>FAQ</p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                aria-label="blog"
                title="blog"
                className="font-medium hover:text-blue-600 tracking-wide text-blue-900 transition-colors duration-200"
              >
                Blog
              </Link>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setOpenBar(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {openBar && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Learning Point
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setOpenBar(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/courses"
                          aria-label="courses"
                          title="courses"
                          className="font-medium tracking-wide text-blue-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/faq"
                          aria-label="faq"
                          title="faq"
                          className="font-medium tracking-wide text-blue-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          <p>FAQ</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          aria-label="blog"
                          title="blog"
                          className="font-medium tracking-wide text-blue-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
