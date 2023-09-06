import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Accordion from 'react-bootstrap/Accordion';

const About = () => {
  const navstyle = {
    top: '2.5%',
    left: '75%',
    fontFamily: "'Times New Roman',",
    fontSize: '1.5em',
  };

  const logo = {
    fontFamily: "'Times New Roman',",
    fontSize: '2em',
    position: 'relative',
    top: '0.2em',
    left: '0.3em',
  };

  return (
    <>
      <div>
        <nav className="navbar-expand-lg bg-success p-1">
          <ul className="d-flex justify-content-between list-unstyled">
            <li>
              <Link to={'/'} className="text-decoration-none text-white" style={logo}>
                BookHaven
              </Link>
            </li>
            <li>
              <div className="mt-3 fs-5">
                <ul className=" d-flex flex-row list-unstyled">
                  <li>
                    <Link to={'/about'} className='text-decoration-none me-3 text-white'>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to={'/login'} className='text-decoration-none me-3 text-white'>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to={'/signup'} className='text-decoration-none me-3 text-white'>
                      Signup
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        <h1 className='text-center text-success text-capitalize my-5'>About BookHaven</h1>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Who Are We?</Accordion.Header>
            <Accordion.Body>
              <strong>Founders</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What You Can Expect?</Accordion.Header>
            <Accordion.Body>
              <strong>Books of Various Genres</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Frequently Asked Questions (FAQs)</Accordion.Header>
            <Accordion.Body>
              <strong>How Can I Add a Book to My Library?</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
              <strong>Who Can See My Library?</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
              <strong>How Do I Edit or Update My Books?</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Help</Accordion.Header>
            <Accordion.Body>
              <strong>How to Save My Progress?</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Associate Partners</Accordion.Header>
            <Accordion.Body>
              <strong>Partner 1</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
              <strong>Partner 2</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Settings</Accordion.Header>
            <Accordion.Body>
              <strong>Login/Signup</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
              <strong>Change Password</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Footer />
    </>
  );
};

export default About;
