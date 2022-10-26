import React, { useState } from "react";

const Faq = () => {
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);

  return (
    <div className="bg-gradient-to-r from-slate-700 to-slate-400">
        <p className="md:text-6xl text-4xl text-center pt-12 font-bold text-slate-100">Frequently asked questions</p>
      <div className="container mx-auto py-5 flex justify-center">
        <div className="md:w-1/2 my-8 p-2 w-full">
          <div className="bg-white shadow rounded p-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold leading-none text-gray-800">
                  What is CORS ?
                </h2>
              </div>
              <button
                onClick={() => setBox1(!box1)}
                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
              >
                {box1 ? (
                  <svg
                    role="button"
                    aria-label="close dropdown"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5L5 1L9 5"
                      stroke="#4B5563"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    role="button"
                    aria-label="open dropdown"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#4B5563"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>

            {box1 && (
              <ul>
                <li>
                  <p className="text-base leading-normal text-gray-600 mt-4">
                    Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                    mechanism that allows a server to indicate any origins
                    (domain, scheme, or port) other than its own from which a
                    browser should permit loading resources. CORS also relies on
                    a mechanism by which browsers make a "preflight" request to
                    the server hosting the cross-origin resource, in order to
                    check that the server will permit the actual request. In
                    that preflight, the browser sends headers that indicate the
                    HTTP method and headers that will be used in the actual
                    request.
                  </p>
                </li>
              </ul>
            )}
          </div>
          <div className="bg-white shadow rounded p-8 mt-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold leading-none text-gray-800">
                  Why are you using firebase ? What other options do you have to
                  implement authentication?
                </h2>
              </div>
              <button
                onClick={() => {
                  setBox2(!box2);
                }}
                data-menu
                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
              >
                {box2 ? (
                  <svg
                    role="button"
                    aria-label="close dropdown"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5L5 1L9 5"
                      stroke="#4B5563"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    role="button"
                    aria-label="open dropdown"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#4B5563"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            {box2 && (
              <ul>
                <li>
                  <p className="text-base leading-normal text-gray-600 mt-4">
                    Firebase Authentication provides backend services,
                    easy-to-use SDKs, and ready-made UI libraries to
                    authenticate users to your app.It supports authentication
                    using passwords, phone numbers, popular federated identity
                    providers like Google, Facebook and Twitter, and
                    more.STYTCH. Alternatives of Firebase: Ory, Supabase, Okta,
                    PingIdentity, Keycloak, Frontegg, Authress.
                  </p>
                </li>
              </ul>
            )}
          </div>
          <div className="bg-white shadow rounded p-8 mt-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold leading-none text-gray-800">
                  How does the private route work?
                </h2>
              </div>
              <button
                onClick={() => {
                  setBox3(!box3);
                }}
                data-menu
                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
              >
                {box3 ? (
                  <svg
                    role="button"
                    aria-label="close dropdown"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5L5 1L9 5"
                      stroke="#4B5563"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    role="button"
                    aria-label="open dropdown"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#4B5563"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            {box3 && (
              <ul>
                <li>
                  <p className="text-base leading-normal text-gray-600 mt-4">
                    The private route component is similar to the public route,
                    the only change is that redirect URL and authenticate
                    condition. If the user is not authenticated he will be
                    redirected to the login page and the user can only access
                    the authenticated routes If he is authenticated (Logged in).
                  </p>
                </li>
              </ul>
            )}
          </div>
          <div className="bg-white shadow rounded p-8 mt-8 mb-24">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold leading-none text-gray-800">
                  What is Node? How does Node work?
                </h2>
              </div>
              <button
                onClick={() => setBox4(!box4)}
                data-menu
                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
              >
                {box4 ? (
                  <svg
                    role="button"
                    aria-label="close dropdown"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5L5 1L9 5"
                      stroke="#4B5563"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    role="button"
                    aria-label="open dropdown"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#4B5563"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            {box4 && (
              <ul>
                <li>
                  <p className="text-base leading-normal text-gray-600 mt-4">
                    Node.js is an open-source backend javascript runtime
                    environment. It is a used as backend service where
                    javascript works on the server-side of the application. This
                    way javascript is used on both frontend and backend. Node.js
                    basically works on two concept. Asynchronous and
                    Non-blocking I/O.Non-blocking i/o means working with
                    multiple requests without blocking the thread for a single
                    request. I/O basically interacts with external systems such
                    as files, databases.Asynchronous is executing a callback
                    function. The moment we get the response from the other
                    server or database it will execute a callback function.
                  </p>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
