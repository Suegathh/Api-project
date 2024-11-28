import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/components/Home';
import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';
import Contact from './assets/components/Contact';
import Book from './assets/components/Books';
import BookDetail from './assets/components/BookDetail';
import BookList from './assets/components/BookList';

function App() {
  const [bookList, setBookList] = useState([]);
  
  const handleAddToList = (book) => {
    setBookList((prevList) => [...prevList, book]);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/book" element={<Book />} />
            <Route path="/book/:id" element={<BookDetail onAddToList={handleAddToList} />} />
          </Routes>
          <BookList books={bookList} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
