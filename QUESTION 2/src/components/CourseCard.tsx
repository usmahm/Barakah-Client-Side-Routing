import { Link, useParams } from "react-router-dom";
import type { Course } from "../types";
import "./Card.css";

const CourseCard = ({ course }: { course: Course }) => {
  const { studentId } = useParams();
  return (
    <div className="card">
      <p style={{marginBottom: "0rem"}}><strong>{course.name}</strong></p>
      <Link to={`/students/${studentId}/courses/${course.id}`}> <br />
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default CourseCard;
