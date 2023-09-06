import React from "react";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Header = ({ userId }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success p-1">
        <Link to={`/home/${userId}`} className="navbar-brand" style={{ fontFamily: "'Times New Roman', cursive", fontSize: "2em" }}>
          BookHaven
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav show"> {/* Add 'show' class here */}
            <li className="nav-item">
              <Link to={`/home/${userId}`} className="nav-link"></Link>
            </li>
            <li className="nav-item">
              <Link to={`/profile/${userId}`} className="nav-link">My Profile</Link> 
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link"></Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
