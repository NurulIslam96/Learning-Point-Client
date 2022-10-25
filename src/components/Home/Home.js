import React from "react";

const Home = () => {
  return (
    <div>
      <div className="mx-auto container flex md:flex-row flex-col justify-center items-center">
        <img
          src="https://cdn.kastatic.org/images/lohp/hero_student_collage_compressed.png"
          alt=""
          className="md:w-2/5 w-full"
        />
        <div className="md:text-5xl text-2xl font-semibold md:text-left md:w-1/3 text-center">
          <p className="my-2">
            For every student, every classroom. <br /> Real results.
          </p>
          <hr className="md:w-64 w-1/3 mx-auto h-1 md:mx-0 md:my-3 rounded border-0 bg-gray-300" />
          <p className="text-xl md:font-semibold font-normal my-6 text-slate-600">
            We're in a mission to provide both free and premium world-class
            education for anyone, anywhere.
          </p>
          <div className="text-lg flex md:flex-row flex-col md:m-0 mx-auto gap-2 w-2/3">
            <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 text-white rounded-md">Get Started</button>
            <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 text-white rounded-md md:block hidden">Latest Releases</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
