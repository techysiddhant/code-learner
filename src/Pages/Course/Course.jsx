import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCoursePage } from "../../redux/coursePageSlice.js";
import CourseCard from "../../Components/CourseCard/CourseCard";
// import ContributionLine from "../../components/ContributionLine/ContributionLine";

const Course = () => {
  const params = useParams();
  const navigate = useNavigate();
  // console.log(params.id);
  const dispatch = useDispatch();
  dispatch(getCoursePage(params.id));
  const course = useSelector((state) => state.coursePage.value);
  useEffect(() => {
    if (course.length === 0) {
      navigate("/contribution");
    }
  }, [course.length, navigate]);
  // console.log(course);
  // useEffect(() => {}, [dispatch, params.id]);
  return (
    <div className="h-full sm:h-full lg:min-h-screen bg-slate-900 text-gray-100">
      <div className="container mx-auto px-5 md:px-10 py-12 h-full">
        <h1 className="text-center pb-8 text-4xl font-semibold tracking-wider">
          <span className="uppercase">{params.id}</span> Tutorials
        </h1>
        <div className="flex flex-wrap flex-row items-center justify-center  gap-10">
          {/* CARD */}
          {course &&
            course.map((item) => (
              <CourseCard
                key={item.id}
                profileUrl={item.profileUrl}
                createrName={item.createrName}
                desc={item.desc}
                language={item.language}
                courseId={item.courseId}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
