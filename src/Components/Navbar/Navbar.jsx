import { RxHamburgerMenu } from "react-icons/rx";

import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="bg-slate-900 text-gray-100 h-16 flex justify-center items-center px-5 md:px-10 pt-5 md:pt-0 ">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center ">
          <div>
            <Link to={"/"}>
              <span className="font-semibold tracking-wider text-2xl ">
                Code{" "}
                <span className="bg-indigo-700 px-2 rounded-sm">Learner</span>
              </span>
            </Link>
          </div>
          <div className="block md:hidden text-gray-100">
            {!nav && <RxHamburgerMenu size={25} onClick={() => setNav(true)} />}
          </div>
          <ul className="hidden md:flex gap-10 text-xl">
            <li>
              <Link
                to="/"
                className="hover:text-indigo-600 transition-all duration-200 ease-in"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="hover:text-indigo-600 transition-all duration-200 ease-in"
              >
                Courses
              </Link>
            </li>
          </ul>
          <div className="hidden md:block">
            <Link
              to={"/"}
              className="bg-indigo-700 py-2 px-3 rounded-full hover:bg-indigo-600 transition-all duration-200 ease-in"
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* Mobile Menu */}

        <div
          className={
            nav
              ? "fixed inset-0 right-1/4  bg-slate-800/40 backdrop-blur-lg uppercase transition-all  duration-500 ease-in flex flex-col justify-center items-center text-3xl gap-10 -translate-x-0 md:hidden"
              : "-translate-x-[110%] md:hidden"
          }
        >
          <div className="absolute top-5 right-5">
            <AiOutlineClose size={35} onClick={() => setNav(false)} />
          </div>
          <Link
            to={"/"}
            className="hover:text-indigo-600 transition-all duration-200 ease-in"
            onClick={() => setNav(false)}
          >
            Home
          </Link>
          <Link
            to="/courses"
            className="hover:text-indigo-600 transition-all duration-200 ease-in"
            onClick={() => setNav(false)}
          >
            Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
