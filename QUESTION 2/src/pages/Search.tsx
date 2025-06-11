import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import StudentCard from "../components/StudentCard";
import { students } from "../data/data";

const Search = () => {
  const [searchParams] = useSearchParams();
  const nameQuery = searchParams.get("name")?.toLowerCase() || "";
  const gradeQuery = searchParams.get("grade")?.toUpperCase() || "";

  const filtered = students.filter((s) => {
    const matchesName = nameQuery ? s.name.toLowerCase().includes(nameQuery) : true;
    const matchesGrade = gradeQuery ? s.grade === gradeQuery : true;
    return matchesName && matchesGrade;
  });

  return (
    <>
      <Header />
      <div className="container">
        <h2 style={{fontSize: "2rem"}}>Search Results</h2>
        {filtered.length === 0 ? (
          <p>No students found for your search.</p>
        ) : (
          <div className="grid">
            {filtered.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
