import { useParams } from "react-router-dom";
import Header from "../components/Header";
import CourseCard from "../components/CourseCard";
import { students } from "../data/data";

const StudentCourses = () => {
  const { studentId } = useParams();
  const student = students.find((s) => s.id === studentId);

  if (!student) return <p>Student not found</p>;

  return (
    <>
      <Header />
      <div className="container">
        <h2>Courses for {student.name}</h2>
        <div className="grid">
          {student.courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </>
  );
};

export default StudentCourses;
