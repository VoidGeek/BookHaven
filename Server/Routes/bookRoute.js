const express = require('express');
const asyncHandler = require('express-async-handler');
const book = require('../Models/bookModel')
const bookRouter = express.Router();

// Create Book
bookRouter.post(
  '/',

  asyncHandler(async (req, res) => {
    try {
      const Book = await book.create(req.body);
      res.status(200);
      res.json(Book);
    } catch (error) {
      res.status(500);
      throw new Error(error);
    }
  })
);

// Delete Book
bookRouter.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    try {
      const Book = await book.findByIdAndDelete(req.params.id);
      res.status(200);
      res.send(Book);
    } catch (error) {
      res.status(500);
      throw new Error('Server Error');
    }
  })
);

// Update Book
bookRouter.put(
  '/:id',
  asyncHandler(async (req, res) => {
    try {
      const Book = await book.findByIdAndUpdate(req.params.id, req.body);
      res.status(200);
      res.json(Book);
    } catch (error) {
      res.status(500);
      throw new Error('Update failed');
    }
  })
);

// Find a Book
bookRouter.get(
  '/:id',
  asyncHandler(async (req, res) => {
    try {
      const Book = await book.findById(req.params.id);
      res.status(200);
      res.send(Book);
    } catch (error) {
      res.status(500);
      throw new Error('No Book found');
    }
  })
);

bookRouter.get(
  '/user/:username',
  asyncHandler(async (req, res) => {
    try {
      const username = req.params.username;
      const books = await book.find({ username: username });
      
      if (books) {
        res.status(200).json(books);
      } else {
        res.status(404).json({ message: 'No books found for this username' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  })
);

// Search by title
// Search by title, author, genre, and published year
bookRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    try {
      const { title, author, genre, published_year } = req.query;
      let books;

      // Create a query object to filter based on provided criteria
      const query = {};

      if (title) {
        query.title = {
          $regex: title,
          $options: 'i',
        };
      }

      if (author) {
        query.author = {
          $regex: author,
          $options: 'i',
        };
      }

      if (genre) {
        query.genre = {
          $regex: genre,
          $options: 'i',
        };
      }

      if (published_year) {
        query.published_year = published_year;
      }

      // Find books that match the criteria
      books = await book.find(query);

      if (books) {
        res.status(200).json(books);
      } else {
        res.status(404).json({ message: 'No books found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  })
);


module.exports = { bookRouter };
