import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome CSS

const Footer = () => {
  const plainTextLinkStyle = {
    color: "inherit", // Use the default text color
    textDecoration: "none", // Remove underline
    cursor: "pointer", // Change cursor on hover
  };

  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h1>BookHaven</h1>
            <p>
              Your one-stop destination for discovering, exploring, and contributing to our vast collection of books.
            </p>
          </div>
          <div className="col-lg-4">
            <h5>Explore</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" style={plainTextLinkStyle}>
                  <i className="fa fa-home"></i> Home
                </a>
              </li>
              <li>
                <a href="/books" style={plainTextLinkStyle}>
                  <i className="fa fa-book"></i> Books
                </a>
              </li>
              <li>
                <a href="/about" style={plainTextLinkStyle}>
                  <i className="fa fa-info-circle"></i> About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5>Contribute</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://github.com/VoidGeek/Final_Milestone/tree/master"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={plainTextLinkStyle}
                >
                  <i className="fa fa-github"></i> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 py-2">
        &copy; {new Date().getFullYear()} LibraryHub. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
