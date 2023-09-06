import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditBook from '../pages/EditBook';

const UserBooks = ({ userId }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    axios
      .get(`http://localhost:4000/api/books/user/${userId}`)
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const containerStyle = {
    backgroundColor: '#f7f7f7',
    padding: '20px',
    borderRadius: '4px',
  };

  const cardStyle = {
    marginBottom: '20px', // Add spacing between cards
  };

  const handleDeleteBook = (bookId) => {
    axios
      .delete(`http://localhost:4000/api/books/${bookId}`)
      .then((response) => {
        if (response.status === 200) {
          fetchBooks();
        } else {
          console.error('Failed to delete book');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <style>
        {`
          /* Internal CSS for bounce effect */
          .card:hover {
            animation: bounce 0.5s;
            transform-origin: center;
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          /* Internal CSS for highlight effect */
          .card:hover {
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
            transition: box-shadow 0.3s ease-in-out;
          }
        `}
      </style>
      <div className="container mt-5">
        <h1 className="text-danger">My Books</h1>
        <br />
        {books && (
          <div className="row">
            {books.map((book) => (
              <div key={book._id} className="col-md-3">
                <div className="card" style={{ ...containerStyle, ...cardStyle }}>
                  <img src={book.image} alt="Book cover" className="card-img-top mt-2" />
                  <h3 className="text-center mt-2">{book.title}</h3>
                  <p className='mt-2'><b>Author:</b> {book.author}</p>
                  <p><b>Genre:</b> {book.genre}</p>
                  <ul className="d-flex justify-content-between list-unstyled m-1">
                    <li>
                      <Link
                        className="btn btn-outline-success"
                        to={`/edit/${userId}/${book._id}`}
                      >
                        Edit
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-outline-dark"
                        to={{ pathname: `/details/${userId}/${book._id}` }}
                      >
                        View
                      </Link>
                    </li>
                    <li>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => handleDeleteBook(book._id)}
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default UserBooks;
