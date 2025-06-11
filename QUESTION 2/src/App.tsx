import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Students from "./pages/Students";
import StudentCourses from "./pages/StudentCourses";
import CourseDetails from "./pages/CourseDetails";
import Search from "./pages/Search";
import "./index.css";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/students" element={<Students />} />
      <Route path="/students/:studentId" element={<StudentCourses />} />
      <Route path="/students/:studentId/courses/:courseId" element={<CourseDetails />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </Router>
);

export default App;
