import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import serviceImg from '../../assets/img/services-header.png';

const Home = () => {
  const courses = useLoaderData();
  const handleLesson = () => toast("Please Sign Up first");
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
              spaceBetween={70}
              slidesPerView={4}
              navigation={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
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
                    <Link
                      to={"/signup"}
                      onClick={handleLesson}
                      className="bg-orange-400 py-2 px-8 rounded text-slate-800 text-sm font-semibold hover:bg-opacity-75"
                    >
                      Go to Lesson
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <div
                className="w-full h-auto hidden lg:block lg:w-1/2"
                style={{
                  background: `url(${serviceImg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              ></div>
              <div className="w-full lg:w-1/2 md:bg-white bg-slate-100 p-5 rounded-lg lg:rounded-l-none">
                <div className="px-8 mb-4 text-center">
                  <h3 className="pt-4 mb-2 text-2xl font-semibold">Contact US!</h3>
                  <p className="mb-4 text-sm text-gray-700">
                    If you would like us to contact you please provide us your information with your Email and Phone Number
                  </p>
                </div>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline mb-2"
                      id="email"
                      type="email"
                      placeholder="Enter Email Address..."
                    />
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                    >
                      Mobile Number
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="number"
                      type="number"
                      placeholder="Enter Mobile Number..."
                    />
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Submit
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
