import React from "react";
import { FaDownload } from 'react-icons/fa';
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const CourseCardSummary = () => {
  const ref = React.createRef();
  const courseDetails = useLoaderData();
  const { id, img_url, details, title, ques } = courseDetails;
  return (
    <div className="bg-gray-300 flex justify-center md:px-0 px-1 py-11 items-center">
      <div className="md:w-1/3 w-full flex flex-col bg-white shadow-lg md:rounded-md overflow-hidden">
        <div className="bg-gray-200 text-gray-700 text-2xl flex justify-between font-semibold px-6 py-4">
          {title}
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => <button onClick={toPdf}><FaDownload></FaDownload></button>}
          </Pdf>
        </div>
        <div ref={ref}>
          <div className="flex justify-between items-center px-2 py-1">
            <img src={img_url} className="w-full" alt="" />
          </div>
          <p className="text-2xl font-semibold px-2 pt-2 ">{ques}</p>
          <div className="px-2 py-2 border-t border-gray-200">
            <div className="border rounded-sm p-4 bg-gray-100">{details}</div>
          </div>
          <div className="bg-gray-200 px-6 py-4 text-center">
            <button className="bg-slate-600 text-white font-semibold px-5 py-2 rounded-sm">
              <Link to={`/checkout/${id}`}>Get Premium Access</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardSummary;
