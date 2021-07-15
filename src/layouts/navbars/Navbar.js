import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { pageUrl } from "../../constant/pageurl";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="container-fluid px-lg-5">
          <Link
            to={pageUrl.HOMEPAGE}
            className="brand-logo"
            style={{ textDecoration: "none" }}
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Anonymous Feedback
          </Link>
          <button className="btn login-btn" type="submit">
            Login
          </button>
        </div>
      </nav>
    </React.Fragment>
  );
};
