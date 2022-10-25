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
      <ul>
        {courses.map((course) => (
          <li key={course.id} course={course}>
            <Link to={`/courses/${course.id}`}>{course.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSiderBar;
