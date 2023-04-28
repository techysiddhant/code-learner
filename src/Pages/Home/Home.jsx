import { Link } from "react-router-dom";
// import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <div className="bg-slate-900 h-screen   text-gray-100">
        <div className="container mx-auto h-full px-5 sm:px-10">
          {/*  Navbar */}
          {/* <Navbar /> */}
          {/*  Hero */}
          <section className=" flex flex-col justify-center items-center h-full  w-full">
            <h1 className="uppercase text-4xl md:text-6xl text-center py-10">
              Code{" "}
              <span className="px-4 rounded-sm bg-indigo-700">Learner</span>
            </h1>
            <h2 className="uppercase text-6xl md:text-7xl text-center">
              Eat, sleep, code, repeat
            </h2>
            <p className="text-center py-6 text-xl">
              Code learner is a platform where you can find free coding
              resources in a structured way.
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
