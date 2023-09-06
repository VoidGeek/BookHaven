import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import book1img from '../Images/book1.jpg';
import book2img from '../Images/book2.jpg';
import book3img from '../Images/book3.jpg';
import Footer from "../components/Footer";

const Landingpage = () => {
    const h1style = {
        position: "absolute",
        top: "50%",
        left: "40%",
        color: "white",
        fontFamily: "' Times New Roman'",
        fontSize: "6em"
    };

    const pstyle = {
        position: "absolute",
        top: "75%",
        left: "15%",
        color: "white",
        fontFamily: "'Times New Roman'",
        fontSize: "2em",
        justifyContent: "center"
    };

    const navstyle = {
        top: "2.5%",
        left: "75%",
        fontFamily: "'Times New Roman'",
        fontSize: "1.5em",
    };

    const logo = {
        fontFamily: "'Times New Roman'",
        fontSize: "2em",
        position: "relative",
        top: "0.2em",
        left: "0.3em"
    };

    return (
        <>
            <nav className='navbar-expand-lg bg-secondary p-1'>
                <ul className="d-flex justify-content-between list-unstyled ">
                    <li>
                        <Link to={'/'} className="text-decoration-none text-white" style={logo}>BookHaven</Link>
                    </li>
                    <li>
                        <div className="mt-3 fs-5">
                            <ul className=" d-flex flex-row list-unstyled ">
                                <li>
                                    <Link to={'/about'} className=' text-decoration-none me-3 text-white'>About</Link>
                                </li>
                                <li>
                                    <Link to={'/login'} className=' text-decoration-none me-3 text-white'>Login</Link>
                                </li>
                                <li>
                                    <Link to={'/signup'} className=' text-decoration-none me-3 text-white'>Signup</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
            <div style={{ position: "relative" }}>
                <Carousel className="" style={{ maxWidth: '1500px', maxHeight: '1500px' }}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={book1img} alt="First slide" style={{ maxHeight: '500px', objectFit: 'cover' }} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={book2img} alt="Second slide" style={{ maxHeight: '500px', objectFit: 'cover' }} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={book3img} alt="Second slide" style={{ maxHeight: '500px', objectFit: 'cover' }} />
                    </Carousel.Item>
                </Carousel>
                <h1 style={h1style} className='h1'>BookHaven</h1>
                <p style={pstyle}>Discover your next favorite book and embark on a literary journey!</p>
            </div>

            <h2  className='text-center pt-2'>Popular Books</h2>
            <p className='p-3 m-3 mt-2 fs-4'>Welcome to BookHaven! Explore a vast collection of books across different genres. Whether you're into thrillers, romance, fantasy, or non-fiction, we have something for every bookworm. Dive into the world of captivating stories and compelling characters. Join our reading community and discover your next literary adventure. Start exploring the world of books today!</p>
            <Footer />
        </>
    )
}

export default Landingpage;
