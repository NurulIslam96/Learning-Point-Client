import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {
  const { title, thumbnail_url, price } = useLoaderData();
  const handlePurchase = () => {
    toast.success('Purchase Completed', {position: toast.POSITION.TOP_CENTER})
  }
  return (
    <div className="md:py-14 py-7 bg-slate-300">
      <div className="container mx-auto px-4">
        <div className="md:flex justify-between">
          <div className="w-full lg:w-4/12 md:mt-0 mt-10 md:px-4">
            <div className="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-4">
                  <h6 className="text-gray-600 text-lg font-bold">
                    Proceed to Checkout
                  </h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="displayName"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Full Name"
                      style={{ transition: "all .15s ease" }}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="number"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Phone number"
                      style={{ transition: "all .15s ease" }}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Email"
                      style={{ transition: "all .15s ease" }}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Full Address
                    </label>
                    <input
                      type="text"
                      name="Address"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Address"
                      style={{ transition: "all .15s ease" }}
                    />
                  </div>
                  <hr className="mt-6 border-b-1 border-gray-400" />
                  <div className="text-center mt-6">
                    <Link to={'/'} className="bg-red-700 hover:bg-orange-700 cursor-pointer text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                      style={{ transition: "all .15s ease" }}>Cancel Order</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex flex-col break-words md:px-10 md:py-5 p-2 mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
            <h2 className="text-center py-2 font-bold text-slate-600">
              {title}
            </h2>
            <img src={thumbnail_url} className="rounded-sm md:w-96 w-full" alt="" />
            <p className="text-center font-bold text-slate-600 py-5">
              Price: ${price}
            </p>
            <div className="flex">
              <input type="checkbox" checked />
              <p className="py-5 font-semibold">Item Selected: 1</p>
            </div>
            <button className="bg-slate-300 text-dark py-2 rounded-t-md font-semibold">
              Total Price: ${price}
            </button>
            <input
              type="text"
              placeholder="Apply Coupon"
              className="rounded-b-md outline-none py-2 border-b-2 border-r-2 border-l-2 px-2"
            />
            <div className="text-center mt-6">
              <input
                type="submit"
                value={"Confirm Order"}
                className="cursor-pointer bg-green-600  hover:bg-green-700  text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                style={{ transition: "all .15s ease" }}
                onClick={handlePurchase}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
