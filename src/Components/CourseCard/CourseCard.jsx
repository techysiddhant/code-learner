import { Link } from "react-router-dom";
import { html } from "../../data/categories/webdevelopment/html.js";
const CourseCard = () => {
  return (
    <>
      {/* CARD */}
      <div className="shadow-xl rounded-md  bg-gray-800  w-96  flex flex-col justify-start items-center p-6">
        <div className="border-4 border-indigo-700 p-2 rounded-full">
          <img
            src={html[0].profileUrl}
            alt={html[0].createrName}
            className="rounded-full"
          />
        </div>
        <h1 className="py-4">{html[0].createrName}</h1>
        <p className="py-2">{html[0].desc}</p>
        <button className="bg-indigo-700 px-4 py-2 rounded-sm hover:bg-indigo-600 transition-all duration-200 ease-in">
          <Link>Watch Now</Link>
        </button>
      </div>
    </>
  );
};

export default CourseCard;
