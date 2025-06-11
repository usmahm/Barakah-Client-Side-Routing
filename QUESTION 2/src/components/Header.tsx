import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <Link to="/">
      <div className="logo">
        <p>🏠Home</p>
      </div>
    </Link>
  </div>
);

export default Header;
