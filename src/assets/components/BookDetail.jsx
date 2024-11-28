import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetail = ({ onAddToList }) => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setBook(json);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;

  if (!book) return <p>No book data available</p>;

  return (
    <div>
      {book && (
        <div>
          <h1>{book.volumeInfo.title}</h1>
          {book.volumeInfo.imageLinks && (
            <img
              src={book.volumeInfo.imageLinks.smallThumbnail}
              alt={`${book.volumeInfo.title} cover`}
            />
          )}
          <p>
            Authors:{" "}
            {book.volumeInfo.authors
              ? book.volumeInfo.authors.join(", ")
              : "No authors available"}
          </p>
          <p>Publisher: {book.volumeInfo.publisher}</p>
          <p>Published Date: {book.volumeInfo.publishedDate}</p>
          <p>Description: {book.volumeInfo.description}</p>
          <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
            More Info
          </a>
          <br />
          <button onClick={() => onAddToList(book)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Add to List
          </button>
        </div>
      )}
    </div>
  );
};

export default BookDetail;
