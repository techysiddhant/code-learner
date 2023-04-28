import { useParams } from "react-router-dom";
import CourseCard from "../../Components/CourseCard/CourseCard.jsx";
import { html } from "../../data/categories/webdevelopment/html.js";
const Course = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <div className="h-[calc(100vh-65px)] bg-slate-900 text-gray-100">
      <div className="container mx-auto px-5 md:px-10 py-12">
        <h1 className="text-center pb-8 text-4xl font-semibold tracking-wider">
          <span className="uppercase">{params.id}</span> Tutorials
        </h1>
        <div className="flex flex-wrap flex-row items-center justify-center  gap-10">
          {/* CARD */}
          {params.id === "html"
            ? html.map((item) => (
                <CourseCard
                  key={item.id}
                  profileUrl={item.profileUrl}
                  createrName={item.createrName}
                  desc={item.desc}
                  language={item.language}
                />
              ))
            : null}
          {/* <CourseCard />
          <CourseCard />
          <CourseCard /> */}
        </div>
      </div>
    </div>
  );
};

export default Course;
