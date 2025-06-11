import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { students } from "../data/data";

const CourseDetails = () => {
  const { studentId, courseId } = useParams();
  const navigate = useNavigate();

  const student = students.find((s) => s.id === studentId);
  const course = student?.courses.find((c) => c.id === courseId);

  if (!course) return <p>Course not found</p>;

  return (
    <>
      <Header />
      <div className="container">
        <h2 style={{ fontSize: "2rem" }}>{course.name} Details</h2>
        <p style={{ fontSize: "1.5rem" }}>{course.description}</p>
        <button className="back-button" onClick={() => navigate(-1)}>
          <span>⬅ Back</span>
        </button>
      </div>
    </>
  );
};

export default CourseDetails;
