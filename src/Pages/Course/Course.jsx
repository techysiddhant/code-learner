import CourseCard from "../../Components/CourseCard/CourseCard.jsx";
const Course = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-100">
      <div className="container mx-auto px-5 md:px-10 py-12">
        <h1 className="text-center pb-8 text-4xl font-semibold tracking-wider">
          HTML Tutorials
        </h1>
        <div className="flex flex-wrap flex-row items-center justify-center  gap-10">
          {/* CARD */}

          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  );
};

export default Course;
