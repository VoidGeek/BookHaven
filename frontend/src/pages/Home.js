import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState({
    title: '',
    author: '',
    genre: '',
    published_year: '',
  });
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []); // Empty dependency array to run fetchBooks only once on mount

  const params = useParams();
  let userId = params.user;

  const containerStyle = {
    backgroundColor: '#f7f7f7',
    padding: '20px',
    borderRadius: '4px',
  };

  const cardStyle = {
    marginBottom: '20px', // Add spacing between cards
  };

  const fetchBooks = () => {
    const { title, author, genre, published_year } = searchQuery;
    const encodedTitle = encodeURIComponent(title);
    const encodedAuthor = encodeURIComponent(author);
    const encodedGenre = encodeURIComponent(genre);
    const encodedPublishedYear = encodeURIComponent(published_year);
  
    axios
      .get(`http://localhost:4000/api/books?title=${encodedTitle}&author=${encodedAuthor}&genre=${encodedGenre}&published_year=${encodedPublishedYear}`)
      .then((response) => {
        setBooks(response.data); // Update books state with the response data
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const searchHandler = (e) => {
    e.preventDefault();
    fetchBooks(); // Trigger a new fetch when the search form is submitted
  };

  const handleCardMouseEnter = (bookId) => {
    setHoveredCard(bookId);
  };

  const handleCardMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <>
      <Header userId={userId} />
      <div className="container mt-5">
        <form className="d-flex" onSubmit={(e) => searchHandler(e)}>
          <input
            type="search"
            name="title"
            placeholder="Search by Title"
            className="form-control"
            value={searchQuery.title}
            onChange={(e) => setSearchQuery({ ...searchQuery, title: e.target.value })}
          />
          <input
            type="search"
            name="author"
            placeholder="Search by Author"
            className="form-control"
            value={searchQuery.author}
            onChange={(e) => setSearchQuery({ ...searchQuery, author: e.target.value })}
          />
          <input
            type="search"
            name="genre"
            placeholder="Search by Genre"
            className="form-control"
            value={searchQuery.genre}
            onChange={(e) => setSearchQuery({ ...searchQuery, genre: e.target.value })}
          />
          <input
            type="search"
            name="published_year"
            placeholder="Search by Published Year"
            className="form-control"
            value={searchQuery.published_year}
            onChange={(e) => setSearchQuery({ ...searchQuery, published_year: e.target.value })}
          />
          <button type="submit" className="btn btn-outline-dark">
            Search
          </button>
        </form>
        <br />
        {books.length === 0 ? (
          <p>No books found!</p>
        ) : (
          <div className="row">
            {books.map((book) => (
              <div
                key={book._id}
                className="col-md-4"
                onMouseEnter={() => handleCardMouseEnter(book._id)}
                onMouseLeave={handleCardMouseLeave}
                style={{
                  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                  transform: hoveredCard === book._id ? 'translateY(-5px)' : 'translateY(0)',
                  boxShadow: hoveredCard === book._id ? '0px 5px 15px rgba(0, 0, 0, 0.3)' : 'none',
                }}
              >
                <div className="card" style={{ ...containerStyle, ...cardStyle }}>
                  <img src={book.image} alt="Book cover" className="card-img-top" />
                  <div className="card-body">
                    <h3 className="card-title">{book.title}</h3>
                    <p className="card-text">
                      <b>Author:</b> {book.author}
                    </p>
                    <p className="card-text">
                      <b>Genre:</b> {book.genre}
                    </p>
                    <p className="card-text">
                      <b>Publication Year:</b> {book.published_year}
                    </p>
                    <Link to={{ pathname: `/details/${userId}/${book._id}` }} className="btn bg-dark text-white">
                      More info
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
