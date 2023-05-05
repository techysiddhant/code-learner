import { Link } from "react-router-dom";

const ContributionLine = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-slate-900 text-gray-100">
      <h1 className="text-xl md:text-2xl text-center">
        Be the first one to add by creating a GitHub issue{" "}
        <span className="bg-indigo-700 px-4  rounded-sm">
          <Link to={"/"}>here</Link>
        </span>
      </h1>
    </div>
  );
};

export default ContributionLine;
