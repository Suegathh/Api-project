import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Book = () => {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=subject:politics")
      .then((response) => response.json())
      .then((json) => {
        setBooks(json.items);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Books</h1>
      <div className="grid grid-cols-2 gap-6">
        {books.map((book) => (
          <div key={book.id} className="mb-6 border-b pb-4">
            {book.volumeInfo.imageLinks && <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={`${book.volumeInfo.title} cover`} />}
            <p>Title: {book.volumeInfo.title}</p>
            <p>Authors: {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'No authors available'}</p>
            <Link to={`/book/${book.id}`} className="text-blue-600 underline">
              View Book
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
