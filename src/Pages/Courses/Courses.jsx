import CourseButton from "../../Components/CourseButton/CourseButton";

const Courses = () => {
  return (
    <div className="bg-slate-900 min-h-screen sm:h-screen text-gray-100">
      <div className="container mx-auto h-full px-5 sm:px-10 py-5">
        <section className="min-h-full">
          <h1 className=" text-2xl sm:text-4xl md:text-6xl text-left py-10">
            {`Let's Start Learning`}
          </h1>
          <div>
            <span className="text-center block text-2xl sm:text-4xl">
              Web{" "}
              <span className="bg-indigo-700 px-2 rounded-sm ">
                Development
              </span>{" "}
            </span>
            <div className="py-8 lg:px-32 flex flex-wrap items-center gap-4  justify-center min-h-full">
              <CourseButton buttonBody={"HTML"} />
              <CourseButton buttonBody={"CSS"} isNew="true" />
              <CourseButton buttonBody={"JavaScript"} />
              <CourseButton buttonBody={"Raect JS"} isNew="true" />
              <CourseButton buttonBody={"Tailwind CSS"} isNew="true" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Courses;
