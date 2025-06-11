import React, { useState, useEffect } from "react";
import "../styles/GithubSearch.css";

type GithubRepo = {
  id: number;
  html_url: string;
  full_name: string;
  description: string;
  topics?: string[];
  stargazers_count: number;
  updated_at: string;
};

const GithubSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sort, setSort] = useState("best match");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const fetchRepos = async () => {
      const sortParam = sort === "best match" ? "" : `&sort=${sort}`;
      const url = `https://api.github.com/search/repositories?q=${query}${sortParam}&order=${order}&per_page=${itemsPerPage}`;
      const res = await fetch(url);
      const data = await res.json();
      setRepos(data.items || []);
    };
    if (query) fetchRepos();
  }, [query, itemsPerPage, sort, order]);

  return (
    <div className="github-search">
      <h2>Github Repository Search</h2>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search repositories"
      />
      <div className="search-controls">
        <div className="sort-filters">
          <label htmlFor="itemsPerPage">Items per page</label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
        <div className="sort-filters">
          <label htmlFor="sort">Sort by</label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="best match">Best match</option>
            <option value="stars">Stars</option>
            <option value="updated">Updated</option>
          </select>
        </div>
        <div className="sort-filters">
          <label htmlFor="order">Order</label>
          <select
            id="order"
            value={order}
            onChange={(e) => setOrder(e.target.value as "asc" | "desc")}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      <div className="repo-list">
        {repos.map((repo) => (
          <div key={repo.id} className="repo-card">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.full_name}
            </a>
            <p>{repo.description}</p>
            <div className="tags">
              {repo.topics?.map((tag: string) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <span className="rating-date">
              {repo.stargazers_count} stars • Updated on{" "}
              {new Date(repo.updated_at).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GithubSearch;
