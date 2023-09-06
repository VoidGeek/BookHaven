import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import UserBooks from '../components/userBooks'; // Update this import
import { Link } from 'react-router-dom';

const Profile = () => {
  const params = useParams();
  const userId = params.user;

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    published_year: '',
    image: '',
    username: `${userId}`,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/books/', formData);

      if (response.status === 200) {
        // Book was successfully added to the library
        alert('Book added successfully');
        // Clear the form
        setFormData({
          title: '',
          author: '',
          genre: '',
          published_year: '',
          image: '',
          username: `${userId}`,
        });
      } else {
        alert('Book addition failed. Please try again.');
      }
    } catch (error) {
      console.error('Error adding book:', error);
      alert('Book addition failed. Please try again.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const containerStyle = {
    backgroundColor: '#f7f7f7', // Background color
    padding: '20px', // Padding around the content
    borderRadius: '4px', // Rounded corners
  };

  const logo ={
    fontFamily:"'Times New Roman', cursive",
    fontSize: "2em",
    position:"relative",
    top:"0.2em",
    left:"0.3em"
  }

  return (
     <>
      <nav className='navbar-expand-lg bg-secondary p-1'>
        <ul className="d-flex justify-content-between list-unstyled ">
            <li>
            <Link to={`/home/${userId}`} className="text-decoration-none text-white" style={logo}>BookHaven</Link>
            </li>
            <li>
            <div className="mt-3 fs-5">
                <ul className=" d-flex flex-row list-unstyled ">
                    <li>
                    <Link to={`/home/${userId}`} className="text-decoration-none m-3 text-white">Home</Link>
                    </li>
                    <li>
                    <Link to={`/`} className="btn btn-dark text-white fs-6 me-2">Log out</Link> 
                    </li>
                </ul>
            </div>
            </li>
        </ul>
      </nav>
      <div className="container mt-3" style={containerStyle}>
        <h1 className='text-dark text-center mt-2'>Welcome!!</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Genre</label>
              <input
                type="text"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Published Year</label>
              <input
                type="text"
                name="published_year"
                value={formData.published_year}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Book Cover Image Link</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <button className="btn btn-danger mt-2" type="submit">
              Add Book
            </button>
          </form>
        </div>
      </div>
      <UserBooks userId={userId} />
      <Footer />
    </>
  );
};

export default Profile;
