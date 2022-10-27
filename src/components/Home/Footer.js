import React from "react";
import { FaFacebook, FaGithub, FaTwitch, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-200 pt-8 pb-6">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-bold text-blueGray-700">
              Learning Point
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex gap-4">
              <button className="bg-white shadow-md p-3 text-blue-500 rounded-full">
                <a
                  href="https://twitter.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaTwitter></FaTwitter>
                </a>
              </button>
              <button className="bg-white shadow-md p-3 text-blue-800 rounded-full">
                <a
                  href="https://facebook.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaFacebook></FaFacebook>
                </a>
              </button>
              <button className="bg-white shadow-md p-3 text-purple-800 rounded-full">
                <a
                  href="https://twitch.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaTwitch></FaTwitch>
                </a>
              </button>
              <button className="bg-white shadow-md p-3 text-slate-600 rounded-full">
                <a
                  href="https://github.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaGithub></FaGithub>
                </a>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to={"/blog"}
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/blog"}
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://github.com/"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.google.com/"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://www.google.com/"
                    >
                      LP License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms?ref=njs-profile"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy?ref=njs-profile"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/contact-us?ref=njs-profile"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300"></hr>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span>2022 Learning Point by Nur</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
