import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMeetup,
  faLinkedin,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <section className="bottom-half">
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
      </section>
    </footer>
  );
};

export default Footer;