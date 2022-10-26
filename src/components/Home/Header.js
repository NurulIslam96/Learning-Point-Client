import React, { useContext } from "react";
import { FaUser } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Header = () => {
  const { user ,logOut} = useContext(AuthContext);
  const [openBar, setOpenBar] = React.useState(false);
  const [profileBar, setProfileBar] = React.useState(false);
  const activeLink = ({ isActive }) => {
    return {
      boxShadow: isActive ? "inset 0 2px #1865f2" : "",
    };
  };
  const handleSignOut = () => {
    logOut()
    setProfileBar(false)
  }
  return (
    <div className="shadow-lg shadow-blue-100">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <NavLink
            to="/"
            aria-label="Learning Point"
            title="Learning Point"
            className="inline-flex items-center"
          >
            <img
              src="https://freesvg.org/img/1519501415.png"
              alt="Learning Point"
              width={"40px"}
            />
            <div className="flex flex-col ml-2 hover:text-blue-600 text-blue-900 transition-colors duration-200">
              <span className="text-2xl font-bold tracking-wide uppercase">
                Learning Point
              </span>
              <small className="font-bold">Easy Way to Learn</small>
            </div>
          </NavLink>
          <ul className="hidden items-center space-x-8 lg:flex">
            <li>
              <NavLink
                style={activeLink}
                to="/courses"
                aria-label="courses"
                title="courses"
                className="font-medium tracking-wide h-32 text-blue-900 transition-colors duration-300 hover:text-blue-600"
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                style={activeLink}
                to="/faq"
                aria-label="faq"
                title="frequently asked questions"
                className="font-medium hover:text-blue-600 tracking-wide text-blue-900 transition-colors duration-300"
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                style={activeLink}
                to="/blog"
                aria-label="blog"
                title="blog"
                className="font-medium hover:text-blue-600 tracking-wide text-blue-900 transition-colors duration-300"
              >
                Blog
              </NavLink>
            </li>
            {user?.uid ? (
              <span className="font-semibold text-blue-500">
                {user?.displayName}
              </span>
            ) : (
              <>
                <li>
                  <NavLink
                    style={activeLink}
                    to="/login"
                    aria-label="login"
                    title="login"
                    className="font-medium hover:text-blue-600 tracking-wide text-blue-900 transition-colors duration-300"
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={activeLink}
                    to="/signup"
                    aria-label="signup"
                    title="signup"
                    className="font-medium hover:text-blue-600 tracking-wide text-blue-900 transition-colors duration-300"
                  >
                    Sign Up
                  </NavLink>
                </li>
              </>
            )}
            {
              user?.uid?
              <li>
              <NavLink
                style={activeLink}
                title={user?.displayName}
                className="rounded-full"
                onClick={() => setProfileBar(true)}
              >
                {
                  user?.photoURL? 
                  <img
                  style={{ height: "35px" }}
                  className='rounded-full'
                  src={user?.photoURL}
                  alt={user?.email}
                />
                :
                <FaUser></FaUser>
                }
              </NavLink>
            </li>
            :
            <></>
            }
            
          </ul>
          {profileBar && (
            <div className="absolute top-11 mx-0 right-0 w-1/6 lg:block hidden">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <NavLink to="/profile" className="inline-flex items-center">
                      <span className="text-md font-bold tracking-wide text-blue-900 uppercase">
                        {user?.displayName}
                      </span>
                    </NavLink>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-300 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setProfileBar(false)}
                    >
                      <svg className="w-5 text-red-600" viewBox="0 0 24 24">
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
                      <NavLink
                        to="/profile"
                        aria-label="profile"
                        title="profile"
                        className="font-medium tracking-wide text-blue-900 transition-colors duration-300 hover:text-blue-600"
                      >
                        Your Profile Info
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        aria-label="signout"
                        title="signout"
                        className="font-medium tracking-wide text-blue-900 transition-colors duration-300 hover:text-blue-600"
                        onClick={handleSignOut}
                      >
                        <p>Sign Out</p>
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-300 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-blue-200"
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
                      <NavLink to="/" className="inline-flex items-center">
                        <span className="ml-2 text-xl font-bold tracking-wide text-blue-900 uppercase">
                          Learning Point
                        </span>
                      </NavLink>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-300 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setOpenBar(false)}
                      >
                        <svg className="w-5 text-red-600" viewBox="0 0 24 24">
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
                        <NavLink
                          to="/courses"
                          aria-label="courses"
                          title="courses"
                          className="font-medium tracking-wide text-blue-900 transition-colors duration-300 hover:text-blue-600"
                        >
                          Courses
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/faq"
                          aria-label="faq"
                          title="faq"
                          className="font-medium tracking-wide text-blue-900 transition-colors duration-300 hover:text-blue-600"
                        >
                          <p>FAQ</p>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/blog"
                          aria-label="blog"
                          title="blog"
                          className="font-medium tracking-wide text-blue-900 transition-colors duration-300 hover:text-blue-600"
                        >
                          Blog
                        </NavLink>
                      </li>
                      {user?.uid ? (
                        <li>
                          <NavLink
                            to="/blog"
                            aria-label="blog"
                            title="blog"
                            className="font-medium tracking-wide text-blue-900 transition-colors duration-300 hover:text-blue-600"
                          >
                            Sign Out
                          </NavLink>
                        </li>
                      ) : (
                        <></>
                      )}
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
