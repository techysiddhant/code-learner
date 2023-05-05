/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CourseCard = ({ profileUrl, createrName, desc, language, courseId }) => {
  return (
    <>
      {/* CARD */}
      <div className="relative shadow-xl rounded-md  bg-gray-800  w-80 sm:w-96 h-[620px]   flex flex-col justify-start items-center p-6">
        <div className="border-4 border-indigo-700 p-2 rounded-full">
          <img src={profileUrl} alt={createrName} className="rounded-full" />
        </div>
        <h1 className="py-4 font-semibold uppercase text-xl sm:text-2xl">
          {createrName}
        </h1>
        <div className="flex flex-row w-full gap-8 items-center justify-center pb-2">
          <span className="text-left text-lg">Course Language</span>
          <span className="text-right text-lg bg-indigo-700 px-2 rounded-md">
            {language}
          </span>
        </div>
        <p className="py-2">{desc}</p>

        <button className="absolute  bottom-3 bg-indigo-700 px-4 py-2 rounded-sm hover:bg-indigo-600 transition-all duration-200 ease-in">
          <Link to={`/courses/tutorial/${courseId}`}>Watch Now</Link>
        </button>
      </div>
    </>
  );
};

export default CourseCard;
