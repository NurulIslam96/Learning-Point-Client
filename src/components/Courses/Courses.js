import React from "react";
import { Link } from "react-router-dom";

const Courses = ({ course }) => {
  const { thumbnail_url, title } = course;
  return (
    <div>
      <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
        <img
          src={thumbnail_url}
          alt=""
          className="h-auto shadow-purple-200 shadow-md w-full"
        />
        <div className="p-5">
          <p className="text-2xl text-center mb-5 text-gray-700">{title}</p>
            <Link className="w-full flex justify-center rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75" to={`/courses/${course.id}`}>Course Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
