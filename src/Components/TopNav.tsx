import React from "react";
import { Link } from "react-router-dom";

const TopNav: React.FC = () => {
  return (
    <nav style={{ backgroundColor: "#007BFF", padding: "1rem" }}>
      <ul style={{ display: "flex", justifyContent: "center", listStyle: "none", padding: 0, margin: 0 }}>
        <li style={{ margin: "0 1rem" }}>
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            Home
          </Link>
        </li>
        <li style={{ margin: "0 1rem" }}>
          <Link to="/profile" style={{ textDecoration: "none", color: "#fff" }}>
            Profile
          </Link>
        </li>
        <li style={{ margin: "0 1rem" }}>
          <Link to="/projgallery" style={{ textDecoration: "none", color: "#fff" }}>
            Project Gallery
          </Link>
        </li>
        <li style={{ margin: "0 1rem" }}>
          <Link to="/tracker" style={{ textDecoration: "none", color: "#fff" }}>
            Tracker
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;