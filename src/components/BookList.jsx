import React from "react";
import { useSelector } from "react-redux";
import BookItem from "./BookItem";
import "../styles/BookList.css";

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
