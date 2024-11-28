import React from "react";

const BookList = ({ books }) => {
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.volumeInfo.title} by {book.volumeInfo.authors.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;