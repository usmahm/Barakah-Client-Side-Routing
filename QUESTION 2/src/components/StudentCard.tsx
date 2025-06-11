import { Link } from "react-router-dom";
import type { Student } from "../types";
import "./Card.css";

const StudentCard = ({ student }: { student: Student }) => (
  <div className="card">
    <p><strong>{student.name}</strong> (Grade {student.grade})</p>
    <Link to={`/students/${student.id}`}>
      <button>View Courses</button>
    </Link>
  </div>
);

export default StudentCard;
