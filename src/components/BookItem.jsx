import React from "react";
import { Link } from "react-router-dom";
import "../styles/BookList.css";

const BookItem = ({ book }) => (
  <div className="book-item">
    <h3>{book.title}</h3>
    <p>{book.author}</p>
    <p>{book.year}</p>
    <Link to={`/books/${book.id}`}>Подробнее</Link>
  </div>
);

export default BookItem;
