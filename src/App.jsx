import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Courses from "./Pages/Courses/Courses";
import Navbar from "./Components/Navbar/Navbar";
import Course from "./Pages/Course/Course";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<Course />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
