import React from "react";
import image from "../../assets/img/author.jpg";

const Blogs = () => {
  return (
    <div className="bg-slate-300">
        <div className="text-center md:py-10 py-4">
        <p className="text-4xl text-slate-600 font-bold">Learning Point Blogs</p>
        <p className="md:text-lg text-sm font-semibold text-slate-800">All about Learning, Coding and Best Practices</p>
        </div>
      <div className="container mx-auto gap-4 py-5 md:grid grid-cols-2">
        <div className="col-span-1 border rounded-md border-gray-400 bg-white m-2 md:m-0 p-4 flex flex-col justify-between">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2 md:h-12">
              What is CORS ?
            </div>
            <hr />
            <p className="text-gray-700 text-base">
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. CORS also relies on a mechanism by which
              browsers make a "preflight" request to the server hosting the
              cross-origin resource, in order to check that the server will
              permit the actual request. In that preflight, the browser sends
              headers that indicate the HTTP method and headers that will be
              used in the actual request.
            </p>
          </div>
          <div className="flex items-center">
            <img src={image} className="rounded-full w-10 h-10" alt="" />
            <div className="text-sm ml-1">
              <p className="text-gray-900 font-semibold leading-none">
                Nurul Islam
              </p>
              <p className="text-gray-600">Oct 24</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 border rounded-md border-gray-400 bg-white m-2 md:m-0 p-4 flex flex-col justify-between">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2 md:h-12">
              Why are you using firebase ? What other options do you have to
              implement authentication?
            </div>
            <hr />
            <p className="text-gray-700 text-base">
              Firebase Authentication provides backend services, easy-to-use
              SDKs, and ready-made UI libraries to authenticate users to your
              app.It supports authentication using passwords, phone numbers,
              popular federated identity providers like Google, Facebook and
              Twitter, and more.STYTCH. Alternatives of Firebase: Ory, Supabase,
              Okta, PingIdentity, Keycloak, Frontegg, Authress.
            </p>
          </div>
          <div className="flex items-center">
            <img src={image} className="rounded-full w-10 h-10" alt="" />
            <div className="text-sm ml-1">
              <p className="text-gray-900 font-semibold leading-none">
                Nurul Islam
              </p>
              <p className="text-gray-600">Oct 25</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 border rounded-md border-gray-400 bg-white m-2 md:m-0 p-4 flex flex-col justify-between">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2 md:h-12">
              How does the private route work?
            </div>
            <hr />
            <p className="text-gray-700 text-base">
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in).
            </p>
          </div>
          <div className="flex items-center">
            <img src={image} className="rounded-full w-10 h-10" alt="" />
            <div className="text-sm ml-1">
              <p className="text-gray-900 font-semibold leading-none">
                Nurul Islam
              </p>
              <p className="text-gray-600">Oct 26</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 border rounded-md border-gray-400 bg-white m-2 md:m-0 p-4 flex flex-col justify-between">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2 md:h-12">
              What is Node? How does Node work?
            </div>
            <hr />
            <p className="text-gray-700 text-base">
              Node.js is an open-source backend javascript runtime environment.
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node.js basically works on two concept.
              Asynchronous and Non-blocking I/O.Non-blocking i/o means working
              with multiple requests without blocking the thread for a single
              request. I/O basically interacts with external systems such as
              files, databases.Asynchronous is executing a callback function.
              The moment we get the response from the other server or database
              it will execute a callback function.
            </p>
          </div>
          <div className="flex items-center">
            <img src={image} className="rounded-full w-10 h-10" alt="" />
            <div className="text-sm ml-1">
              <p className="text-gray-900 font-semibold leading-none">
                Nurul Islam
              </p>
              <p className="text-gray-600">Oct 27</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
