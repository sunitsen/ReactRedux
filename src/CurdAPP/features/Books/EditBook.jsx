import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateBook } from './BooksSlice';

const EditBook = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Ensure the state has defaults in case of undefined
  const { id, title: initialTitle, author: initialAuthor } = location.state || {};

  // Fix typo: 'authot' should be 'author'
  const [title, setTitle] = useState(initialTitle || "");
  const [author, setAuthor] = useState(initialAuthor || "");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({ id, title, author }));
    navigate("/show-books");
  };

  return (
    <Container className="mt-4">
      <h1 className="mb-4 text-center">Edit Book</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formAuthor" className="mt-3">
          <Form.Label>Author:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Update Book
        </Button>
      </Form>
    </Container>
  );
};

export default EditBook;
