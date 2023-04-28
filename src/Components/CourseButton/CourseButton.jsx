/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CourseButton = ({ isNew = false, buttonBody }) => {
  return (
    <>
      <Link
        to="/courses/css"
        className="relative inline-flex min-w-[150px] items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-indigo-700 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span className="relative">{buttonBody}</span>
        {isNew && (
          <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-indigo-700">
            New
          </span>
        )}
      </Link>
    </>
  );
};

export default CourseButton;
