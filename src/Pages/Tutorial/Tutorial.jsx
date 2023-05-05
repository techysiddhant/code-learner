import { useParams } from "react-router-dom";
import "./tutorial.css";
// import ContributionLine from "../../components/ContributionLine/ContributionLine";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../../redux/courseSlice";
import ContributionLine from "../../components/ContributionLine/ContributionLine";
// eslint-disable-next-line react/prop-types
const LectureBtn = ({ lectureName, setLectureNumber, id }) => {
  return (
    <div className=" border border-indigo-700 mx-2 ">
      <button
        onClick={() => setLectureNumber(id)}
        className="w-full p-4 text-center border-b border-indigo-700 hover:bg-indigo-700  transition ease-in duration-300"
      >
        #{id + 1} {lectureName}
      </button>
    </div>
  );
};
const Tutorial = () => {
  const params = useParams();
  const [lectureNumber, setLectureNumber] = useState(0);
  // const tutorialNumber = +params.courseId.toString().slice(-1);
  // console.log(tutorialNumber);
  const dispatch = useDispatch();
  const { lectures } = useSelector((state) => state.course.value);
  // const { lectures } = value[0];
  // console.log(value);
  // console.log(params.courseId);
  // const { lectures } = htmlCourse[tutorialNumber - 1];
  // console.log(lectures);
  useEffect(() => {
    dispatch(getCourse(params.courseId));
  }, [dispatch, params.courseId]);
  return (
    <div className="max-h-full bg-slate-900 text-gray-100">
      <div className="px-5 py-2 ">
        {/* GRID */}

        <div className=" tutorial gap-6">
          {/* Video part */}
          {lectures ? (
            <div>
              <div className="relative pb-[56.25%] pt-[25px] h-0 w-full">
                <iframe
                  className="absolute top-0 left-0 right-0 bottom-0 w-full h-full "
                  src={lectures[lectureNumber].lectureUrl}
                  title="What is JavaScript?"
                  // frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen="1"
                ></iframe>
              </div>
              <div className="min-h-[200px] overflow-y-auto px-5 py-5 border drop-shadow-lg rounded-sm my-2">
                <h1 className="bg-indigo-700 px-2 py-2 text-xl italic">
                  Lecture: #{lectureNumber + 1}{" "}
                  {lectures[lectureNumber].lectureName}
                </h1>
                <p className="py-2">
                  {lectures[lectureNumber].lectureDescription}
                </p>
              </div>
            </div>
          ) : (
            <ContributionLine />
          )}

          {/* Lectures part */}
          <div className="md:h-screen overflow-y-auto ">
            {lectures &&
              lectures.map((item) => (
                <LectureBtn
                  key={item.lectureId}
                  lectureName={item.lectureName}
                  setLectureNumber={setLectureNumber}
                  id={item.lectureId}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
