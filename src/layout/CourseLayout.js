import React from "react";
import { Outlet } from "react-router-dom";
import LeftSiderBar from "../components/Courses/LeftSiderBar";

const CourseLayout = () => {
  return (
    <div className="container mx-auto mt-3 ">
      <div className="grid md:grid-cols-4 grid-cols-1 md:mb-2">
        <div className="col-span-1 bg-slate-600 md:rounded-l-md text-center py-28">
          <LeftSiderBar></LeftSiderBar>
        </div>
        <div className="col-span-3 grid md:grid-cols-3 grid-cols-1 gap-6 items-center justify-center bg-slate-200 md:rounded-r-md px-4 py-12">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default CourseLayout;
