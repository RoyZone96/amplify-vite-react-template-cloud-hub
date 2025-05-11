import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMeetup,
  faLinkedin,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <section className="full-footer">
        <section className="top-half">
          <span className="email">
            <a href="mailto:info@cloudhub.com">info@cloudhub.com</a>
          </span>
          <div className="footer-links">
            <ul>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/get-involved">Get Involved</Link>
              </li>
              <li>
                <a
                  href="https://hcb.hackclub.com/donations/start/cloud-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sponsor
                </a>
              </li>
            </ul>
          </div>
        </section>
        <div className="bottom-half">
          <p className="copyright">
            © 2025 Cloud Hub. All rights reserved.
          </p>
          <ul className="social-list">
            <li>
              <a
                href="https://www.linkedin.com/company/cloud-hub/"
                className="social-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                href="https://cloudhub.slack.com"
                className="social-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="social-icon" icon={faSlack} />
              </a>
            </li>
            <li>
              <a
                href="https://www.meetup.com/cloud-hub"
                className="social-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="social-icon" icon={faMeetup} />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;