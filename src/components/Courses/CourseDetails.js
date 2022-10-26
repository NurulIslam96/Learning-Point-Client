import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);
  const { id, img_url, details, title, ques } = courseDetails;
  return (
    <div className="lg:w-1/3 md:w-1/2 md:absolute lg:right-1/4 max-h-fit">
      <div className="bg-white lg:p-5 p-2 rounded-md">
        <p className="text-2xl font-semibold text-center pb-5">{title}</p>
        <img src={img_url} className="w-full pb-5" alt="" />
        <p className="text-2xl md:text-left text-center font-semibold">
          {ques}
        </p>
        <hr className="pb-3" />
        {details.length > 300 ? (
          <p>{details.slice(0, 300) + "..."}<Link to={`/checkout/${id}`} className="text-blue-700 font-semibold">Read More</Link></p>
        ) : (
          <p>{details}</p>
        )}
        <div className="text-center py-5">
          <button className="bg-slate-500 hover:bg-slate-700 text-white font-semibold px-5 py-2 rounded-sm">
            Go to Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
