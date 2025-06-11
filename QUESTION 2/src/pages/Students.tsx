import Header from "../components/Header";
import StudentCard from "../components/StudentCard";
import { students } from "../data/data";

const Students = () => (
  <>
    <Header />
    <div className="container">
      <h2>All Students</h2>
      <div id="students-grid">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  </>
);

export default Students;
