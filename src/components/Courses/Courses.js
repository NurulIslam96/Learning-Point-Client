import React from "react";
import { useLoaderData } from "react-router-dom";
import LeftSiderBar from "./LeftSiderBar";

const Courses = () => { 
    const courses = useLoaderData()
    console.log(courses)
  return (
    <div>
      <LeftSiderBar></LeftSiderBar>
    </div>
  );
};

export default Courses;
