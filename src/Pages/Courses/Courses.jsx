import CourseButton from "../../Components/CourseButton/CourseButton";
import { androiddevelopment } from "../../data/categories/androiddevelopment/androiddevelopment";
import { programminglangugages } from "../../data/categories/programminglanguages/programminglanguages";
import { webdevelopment } from "../../data/categories/webdevelopment/webdevelopment.js";
const Courses = () => {
  return (
    <div className="bg-slate-900 min-h-screen  text-gray-100">
      <div className="container mx-auto h-full px-5 sm:px-10 py-5">
        <section className="min-h-full">
          <h1 className=" text-2xl sm:text-4xl md:text-6xl text-left py-10">
            {`Let's Start Learning`}
          </h1>
          <div className="flex flex-col min-h-[300px] justify-start items-center w-full  py-5">
            <h1 className="text-center block text-2xl sm:text-4xl">
              Web{" "}
              <span className="bg-indigo-700 px-2 rounded-sm ">
                Development
              </span>{" "}
            </h1>
            <div className="py-10 lg:px-32 flex flex-wrap items-center gap-4  justify-center ">
              {webdevelopment.map((item) => (
                <CourseButton
                  key={item.id}
                  buttonBody={item.title}
                  isNew={item.isNew}
                  url={item.url}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col min-h-[300px] justify-start items-center w-full  py-5">
            <h1 className="text-center block text-2xl sm:text-4xl">
              Programming{" "}
              <span className="bg-indigo-700 px-2 rounded-sm ">Languages</span>{" "}
            </h1>
            <div className="py-10 lg:px-32 flex flex-wrap items-center gap-4  justify-center ">
              {programminglangugages.map((item) => (
                <CourseButton
                  key={item.id}
                  buttonBody={item.title}
                  isNew={item.isNew}
                  url={item.url}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col min-h-[300px] justify-start items-center w-full  py-5">
            <h1 className="text-center block text-2xl sm:text-4xl">
              Android{" "}
              <span className="bg-indigo-700 px-2 rounded-sm ">
                Development
              </span>{" "}
            </h1>
            <div className="py-10 lg:px-32 flex flex-wrap items-center gap-4  justify-center ">
              {androiddevelopment.map((item) => (
                <CourseButton
                  key={item.id}
                  buttonBody={item.title}
                  isNew={item.isNew}
                  url={item.url}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Courses;
