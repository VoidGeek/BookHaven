import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button, Form, Card, Alert, Container } from 'react-bootstrap';

const EditBook = () => {
  const params = useParams();
  const id = params.id;
  const userId = params.user;
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: '',
    published_year: '',
    image: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/books/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const containerStyle = {
    backgroundColor: '#f7f7f7',
    padding: '20px',
    borderRadius: '4px',
    // Add spacing (gap) to the left and right sides
    marginLeft: '10px',
    marginRight: '10px',
  };

  const handleInputChange = (name, value) => {
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleEditBook = () => {
    axios
      .put(`http://localhost:4000/api/books/${id}`, book)
      .then((response) => {
        if (response.status === 200) {
          alert('Book edited successfully');
          // Optionally, you can reset the success message after a few seconds
        } else {
          console.error('Failed to edit book');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
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
      <Container className='mt-3'>
        <Card style={containerStyle}>
          <Card.Body>
            <h2 className='text-center'>Edit Book</h2>
            {successMessage && <Alert variant="success">{successMessage}</Alert>}
            <Form onSubmit={handleEditBook}>
                <Form.Group controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={book.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="author">
                  <Form.Label>Author</Form.Label>
                  <Form.Control
                    type="text"
                    value={book.author}
                    onChange={(e) => handleInputChange('author', e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="genre">
                  <Form.Label>Genre</Form.Label>
                  <Form.Control
                    type="text"
                    value={book.genre}
                    onChange={(e) => handleInputChange('genre', e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="published_year">
                  <Form.Label>Published Year</Form.Label>
                  <Form.Control
                    type="text"
                    value={book.published_year}
                    onChange={(e) => handleInputChange('published_year', e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="image">
                  <Form.Label>Cover Image URL</Form.Label>
                  <Form.Control
                    type="text"
                    value={book.image}
                    onChange={(e) => handleInputChange('image', e.target.value)}
                    required
              />
              </Form.Group>
              <Button variant="primary" type="submit" className='mt-2'>
                Update Book
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default EditBook;
