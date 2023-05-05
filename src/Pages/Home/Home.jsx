import { Link } from "react-router-dom";
// import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <div className="bg-slate-900 h-[calc(100vh-65px)]   text-gray-100 overflow-x-hidden">
        <div className="container mx-auto h-full px-5 sm:px-10 ">
          {/*  Navbar */}
          {/* <Navbar /> */}
          {/*  Hero */}
          <section className=" flex flex-col md:justify-center items-center h-full w-full px-6 md:px-16">
            <h1 className="uppercase text-4xl md:text-6xl text-center py-10 ">
              Code{" "}
              <span className="px-4  rounded-sm bg-indigo-700">Learner</span>
            </h1>
            <h2 className="uppercase text-5xl md:text-7xl text-center leading-tight">
              Debugging is my cardio - join the coding gym!
            </h2>
            <p className="text-center py-6 text-xl">
              Are you tired of feeling like a clueless dodo when it comes to
              coding and programming? Well, put down that coconut and check out
              our code learner!
            </p>
            <Link to={"/courses"} className="flex justify-center items-center">
              <button className="bg-indigo-600 py-2 px-3 rounded-full hover:bg-indigo-700 transition-all duration-200 ease-in">
                {`Let's Learn How to Code`}
              </button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
