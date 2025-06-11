import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage: React.FC = () => (
  <div className="home-page">
    <h1>Welcome to the Central Home Page</h1>
    <p>Click link to get started</p>
    <div className="btnContainer">
      <Link to="/contact-book">
        <button className="home-page-button">Contact Book</button>
      </Link>
      <Link to="/github-search">
        <button className="home-page-button">GitHub Search</button>
      </Link>
    </div>
  </div>
);

export default HomePage;
