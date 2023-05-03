import { useParams } from "react-router-dom";
import CourseCard from "../../Components/CourseCard/CourseCard.jsx";

import ContributionLine from "../../components/ContributionLine/ContributionLine.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCoursePage } from "../../redux/coursePageSlice.js";

const Course = () => {
  const params = useParams();

  // console.log(params.id);
  const dispatch = useDispatch();
  const course = useSelector((state) => state.coursePage.value);
  // console.log(course);
  useEffect(() => {
    dispatch(getCoursePage(params.id));
  }, [dispatch, params.id]);
  return (
    <div className="h-screen sm:h-full lg:min-h-screen bg-slate-900 text-gray-100">
      <div className="container mx-auto px-5 md:px-10 py-12 h-full">
        <h1 className="text-center pb-8 text-4xl font-semibold tracking-wider">
          <span className="uppercase">{params.id}</span> Tutorials
        </h1>
        <div className="flex flex-wrap flex-row items-center justify-center  gap-10">
          {/* CARD */}
          {course.length > 0 ? (
            course.map((item) => (
              <CourseCard
                key={item.id}
                profileUrl={item.profileUrl}
                createrName={item.createrName}
                desc={item.desc}
                language={item.language}
                courseId={item.courseId}
              />
            ))
          ) : (
            <ContributionLine />
          )}
        </div>
      </div>
    </div>
  );
};

export default Course;
