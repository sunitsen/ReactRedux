import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from '../Pages/Error';
import Home from '../Pages/Home';
import Navbar from '../layouts/Navbar';
import BooksView from '../features/Books/BooksView';
import AddBooks from '../features/Books/AddBooks';
import EditBook from '../features/Books/EditBook'
const Index = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <main>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show-books" element={<BooksView />} />
        <Route path="/add-book" element={<AddBooks />} />
        <Route path="/edit-book" element={<EditBook />} />
        <Route path="*" element={<Error />} />

    
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default Index;
