import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addBooks } from './BooksSlice';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: uuidv4(), title, author };
    dispatch(addBooks(book));
    // Reset form fields after submission
    setTitle("");
    setAuthor("");
    navigate("/show-books", { replace: true })
  };




  return (
    <Container className="mt-4">
      <h1 className="mb-4 text-center">Add Books</h1>
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
          Add Book
        </Button>
      </Form>
    </Container>
  );
};

export default AddBooks;
