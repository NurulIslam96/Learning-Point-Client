import React from "react";
import { useLoaderData } from "react-router-dom";
import Courses from "./Courses";

const CoursesContainer = () => {
  const courses = useLoaderData();
  return (
    <div className="col-span-3 grid md:grid-cols-3 grid-cols-1 gap-6 items-center justify-center bg-slate-200 rounded-r-md px-4 py-12">
      {courses.map((course) => (
        <Courses key={course.id} course={course}></Courses>
      ))}
    </div>
  );
};

export default CoursesContainer;
