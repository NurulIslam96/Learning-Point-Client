import React from "react";
import { useLoaderData } from "react-router-dom";
import Courses from "./Courses";
import LeftSiderBar from "./LeftSiderBar";

const CoursesContainer = () => {
  const courses = useLoaderData();
  return (
    <div className="container mx-auto mt-3 ">
      <div className="grid md:grid-cols-4 grid-cols-1">
        <div className="col-span-1 bg-slate-600 rounded-l-md text-center pt-28">
          <LeftSiderBar></LeftSiderBar>
        </div>
        <div className="col-span-3 grid md:grid-cols-3 grid-cols-1 gap-6 items-center justify-center bg-slate-200 rounded-r-md px-4 py-12">
          {courses.map((course) => (
            <Courses key={course.id} course={course}></Courses>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesContainer;
