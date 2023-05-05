import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Courses from "./Pages/Courses/Courses";
import Navbar from "./Components/Navbar/Navbar";
import Course from "./Pages/Course/Course";
import Tutorial from "./Pages/Tutorial/Tutorial";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import Contribute from "./Components/Contribute/Contribute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<Course />} />
        <Route path="/courses/tutorial/:courseId" element={<Tutorial />} />
        <Route path="/contribution" element={<Contribute />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
