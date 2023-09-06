import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Details = () => {
    const params = useParams();
    let id = params.id;
    let userId = params.user;
    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        fetchBook();
    },);

    const fetchBook = () => {
        axios.get(`http://localhost:4000/api/books/${id}`)
            .then((response) => {
                setBookData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const containerStyle = {
        backgroundColor: '#f7f7f7', // Background color
        padding: '20px', // Padding around the content
        borderRadius: '4px', // Rounded corners
    };

    const headerStyle = {
        backgroundColor: '#3498db', // Header background color (blue)
        color: '#fff', // Header text color (white)
        padding: '10px', // Header padding
        borderRadius: '4px 4px 0 0', // Rounded top corners
    };

    const titleStyle = {
        fontSize: '24px', // Font size for the title
        fontWeight: 'bold', // Bold font weight
        marginBottom: '10px', // Margin at the bottom of the title
        color: '#333', // Title text color (dark gray)
    };

    const imageStyle = {
        maxHeight: '200px', // Maximum height for book image
        borderRadius: '4px', // Rounded corners for book image
    };

    const detailsStyle = {
        marginTop: '20px', // Margin at the top of book details
    };

    const buttonStyle = {
        backgroundColor: '#27ae60', // Button background color (green)
        color: '#fff', // Button text color (white)
        padding: '10px 20px', // Button padding
        border: 'none', // No border
        borderRadius: '4px', // Rounded corners
        cursor: 'pointer', // Pointer cursor
    };

    return (
        <>
            <nav className='navbar-expand-lg bg-success p-1'>
                <ul className="d-flex justify-content-between list-unstyled ">
                    <li>
                        <Link to={`/home/${userId}`} className="text-decoration-none text-white" style={{ fontFamily: "'Times New Roman', cursive", fontSize: "2em", position: "relative", top: "0.2em", left: "0.3em" }}>BookHaven</Link>
                    </li>
                    <li>
                        <Link to={`/home/${userId}`} className="btn btn-outline-dark">Back</Link>
                    </li>
                </ul>
            </nav>

            <div className="container" style={containerStyle}>
                {bookData && (
                    <>
                        <div className="header" style={headerStyle}>
                            <h1 style={titleStyle}>{bookData.title}</h1>
                        </div>
                        <img src={bookData.image} alt="" className="book-image mt-2" style={imageStyle} />
                        <div className="book-details" style={detailsStyle}>
                            <p><strong>Author:</strong> {bookData.author}</p>
                            <p><strong>Genre:</strong> {bookData.genre}</p>
                            <p><strong>Publication Year:</strong> {bookData.published_year}</p>
                            {/* Add more book details here if needed */}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Details;
