import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactBook from "./pages/ContactBook";
import GithubSearch from "./pages/GithubSearch";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-book" element={<ContactBook />} />
          <Route path="/github-search" element={<GithubSearch />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
