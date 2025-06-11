import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query.trim()) {
      alert("Please fill the search bar.");
      return;
    }

    const isGrade = ["A", "B"].includes(query.toUpperCase());
    const param = isGrade ? `grade=${query.toUpperCase()}` : `name=${query}`;
    navigate(`/search?${param}`);
  };

  return (
    <>
      <Header />
      <div className="container">
        <h1> 🎓 Student Portal</h1>
        <div className="actions">
          <button onClick={() => navigate("/students")}>
            View All Students
          </button>

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              padding: "1rem",
              marginLeft: "1rem",
              marginRight: "1rem",
              borderRadius: "4px",
              border: "1px solid blue",
            }}
          />
          <button onClick={handleSearch}>
            <span>🔍 Search</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
