import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from 'react-toastify';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

const Home = () => {
  const courses = useLoaderData();
  const handleLesson = () => toast('Please Sign Up first')
  return (
    <div>
      <div className="mx-auto container flex md:flex-row flex-col justify-center items-center my-28">
        <img
          alt=""
          src="https://cdn.kastatic.org/images/lohp/hero_student_collage_compressed.png"
          className="md:w-2/5 w-full"
        />
        <div className="md:text-5xl text-2xl font-semibold md:ml-8 md:text-left md:w-1/3 text-center">
          <p className="my-2">
            For every student, every classroom. <br /> Real results.
          </p>
          <hr className="md:w-64 w-1/3 mx-auto h-1 md:mx-0 md:my-3 rounded border-0 bg-gray-300" />
          <p className="text-xl md:font-semibold font-normal my-6 text-slate-600">
            We're in a mission to provide both free and premium world-class
            education for anyone, anywhere.
          </p>
          <div className="text-lg flex md:flex-row flex-col md:m-0 mx-auto gap-2 w-2/3">
            <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 text-white rounded-md">
              Get Started
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 text-white rounded-md md:block hidden">
              Latest Releases
            </button>
          </div>
        </div>
      </div>
      <div className="lg:block hidden">
        <div className="bg-gradient-to-r from-blue-700 to-slate-800">
          <p className="text-center text-3xl md:pt-14 font-bold text-white">
            Learning Point Success Rate
          </p>
          <div className="container mx-auto py-24">
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              navigation={true}
              pagination={{ clickable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {courses.map((course) => (
                <SwiperSlide key={course.id} course={course} className="">
                  <div className="bg-white md:w-auto w-full p-10 rounded-lg shadow-md">
                    <h1 className="text-xl font-bold">{course.name}</h1>
                    <div className="mt-4 mb-10">
                      <p className="text-gray-600">Success rate 75%</p>
                      <div className="bg-blue-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                        <div className="bg-orange-400 w-3/4 h-full rounded-lg shadow-md"></div>
                      </div>
                    </div>
                    <h3 className="text-xs uppercase">Current lesson:</h3>
                    <h2 className="tracking-wide mb-4">
                      Object in {course.name}
                      <br />
                      (Challenge)
                    </h2>
                    <Link to={'/signup'} onClick={handleLesson} className="bg-orange-400 py-2 px-8 rounded text-slate-800 text-sm font-semibold hover:bg-opacity-75">
                      Go to Lesson
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
