import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSiderBar = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://learning-point-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
        {courses.map((course) => (
          <button
            key={course.id}
            course={course}
            className="bg-white active:bg-gray-100 text-gray-800 w-2/3 rounded outline-none focus:outline-none mr-2 mb-5 uppercase shadow 
            hover:shadow-md items-center font-bold text-lg py-3"
            type="button"
          >
            <Link to={`/courses/${course.id}`}>{course.name}</Link>
          </button>
        ))}
    </div>
  );
};

export default LeftSiderBar;
