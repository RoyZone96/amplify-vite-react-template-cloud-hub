import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: "#f8f9fa", padding: "1rem", textAlign: "center" }}>
      <nav>
        <ul style={{ display: "flex", justifyContent: "center", listStyle: "none", padding: 0, margin: 0 }}>
          <li style={{ margin: "0 1rem" }}>
            <Link to="/" style={{ textDecoration: "none", color: "#007BFF" }}>
              Home
            </Link>
          </li>
          <li style={{ margin: "0 1rem" }}>
            <Link to="/profile" style={{ textDecoration: "none", color: "#007BFF" }}>
              Profile
            </Link>
          </li>
          <li style={{ margin: "0 1rem" }}>
            <Link to="/projgallery" style={{ textDecoration: "none", color: "#007BFF" }}>
              Project Gallery
            </Link>
          </li>
          <li style={{ margin: "0 1rem" }}>
            <Link to="/tracker" style={{ textDecoration: "none", color: "#007BFF" }}>
              Tracker
            </Link>
          </li>
        </ul>
      </nav>
      <div style={{ marginTop: "1rem" }}>
        <p>&copy; 2023 Cloud Hub. All rights reserved.</p>
        <p>Follow us on social media:</p>
      </div>
    </footer>
  );
};

export default Footer;