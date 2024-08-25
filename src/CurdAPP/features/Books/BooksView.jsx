import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'react-bootstrap'; // Import Table and Button from react-bootstrap
import { deleteBooks } from './BooksSlice'; // Ensure you import deleteBooks correctly
import { Link } from 'react-router-dom';

const BooksView = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleDeleteBooks = (id) => {
    dispatch(deleteBooks(id));
  };

  return (
    <div>
      <h2 className="mb-4 text-center">List of Books</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            {/* <th className="text-center">ID</th> */}
            <th className="text-center">Title</th>
            <th className="text-center">Author</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {books && books.map((book) => {
            const { id, title, author } = book;
            return (
              <tr key={id}>
                {/* <td className="text-center">{id}</td> */}
                <td className="text-center">{title}</td>
                <td className="text-center">{author}</td>
                <td className="text-center">
                 <Link to="/edit-book" state={{id,title,author}}><Button variant="warning" className="me-2">Edit</Button></Link>
                  <Button onClick={() => handleDeleteBooks(id)} variant="danger">Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default BooksView;
