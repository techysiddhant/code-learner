import { Link } from "react-router-dom";
import "./tutorial.css";
const Tutorial = () => {
  return (
    <div className="max-h-full bg-slate-900 text-gray-100">
      <div className="px-5 py-2 ">
        {/* GRID */}
        <div className=" tutorial gap-6">
          {/* Video part */}
          <div className="">
            <div className="relative pb-[56.25%] pt-[25px] h-0 w-full">
              <iframe
                className="absolute top-0 left-0 right-0 bottom-0 w-full h-full "
                src="https://www.youtube.com/embed/upDLs1sn7g4"
                title="What is JavaScript?"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen="1"
              ></iframe>
            </div>
            <div className="h-24 overflow-y-auto px-5 py-5">
              <h1>Heading of the video</h1>
              <p>description of the video</p>
              <p>description of the video</p>
              <p>description of the video</p>
              <p>description of the video</p>
              <p>description of the video</p>
              <p>description of the video</p>
            </div>
          </div>
          {/* Lectures part */}
          <div className="md:h-screen overflow-y-auto ">
            <div className=" border border-indigo-700 mx-2 rounded-md">
              <button className="w-full p-4 text-center border-b border-indigo-700 hover:bg-indigo-700 rounded-md transition ease-in duration-300">
                <Link>
                  Lecture No 1 Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Vitae, aperiam!
                </Link>
              </button>
              <button className="w-full p-4 text-center border-b-2">
                <Link>Lecture No 1</Link>
              </button>
              <button className="w-full p-4 text-center border-b-2">
                <Link>Lecture No 1</Link>
              </button>
              <button className="w-full p-4 text-center border-b-2">
                <Link>Lecture No 1</Link>
              </button>
              <button className="w-full p-4 text-center border-b-2">
                <Link>Lecture No 1</Link>
              </button>
              <button className="w-full p-4 text-center border-b-2">
                <Link>Lecture No 1</Link>
              </button>
              <button className="w-full p-4 text-center border-b-2">
                <Link>Lecture No 1</Link>
              </button>
              <button className="w-full p-4 text-center border-b-2">
                <Link>Lecture No 1</Link>
              </button>
              <button className="w-full p-4 text-center border-b-2">
                <Link>Lecture No 1</Link>
              </button>
              <button className="w-full p-4 text-center border-b-2">
                <Link>Lecture No 1</Link>
              </button>
              <button className="w-full p-4 text-center border-b-2">
                <Link>Lecture No 1</Link>
              </button>
              <button className="w-full p-4 text-center border-b-2">
                <Link>Lecture No 1</Link>
              </button>
              <button className="w-full p-4 text-center border-b-2">
                <Link>Lecture No 1</Link>
              </button>
              <button className="w-full p-4 text-center border-b-2">
                <Link>Lecture No 1</Link>
              </button>
              <button className="w-full p-4 text-center border-b-2">
                <Link>Lecture No 1</Link>
              </button>
              <button className="w-full p-4 text-center border-b-2">
                <Link>Lecture No 1</Link>
              </button>
              <button className="w-full p-4 text-center border-b-2">
                <Link>Lecture No 1</Link>
              </button>
              <button className="w-full p-4 text-center border-b-2">
                <Link>Lecture No 1</Link>
              </button>
              <button className="w-full p-4 text-center border-b-2">
                <Link>Lecture No 1</Link>
              </button>
              <button className="w-full p-4 text-center border-b-2">
                <Link>Lecture No 1</Link>
              </button>
              <button className="w-full p-4 text-center border-b-2">
                <Link>Lecture No 1</Link>
              </button>
              <button className="w-full p-4 text-center border-b-2">
                <Link>Lecture No 1</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
