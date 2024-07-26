import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { deleteBook } from "../redux/actions/bookActions";
import "../styles/BookDetail.css";

const BookDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const book = useSelector((state) => state.books.find((b) => b.id === id));

  if (!book) {
    return <div>Книга не найдена</div>;
  }

  const handleDelete = () => {
    dispatch(deleteBook(id));
    navigate("/");
  };

  return (
    <div className="book-detail">
      <h2>{book.title}</h2>
      <p>
        <strong>Автор:</strong> {book.author}
      </p>
      <p>
        <strong>Год издания:</strong> {book.year}
      </p>
      <p>
        <strong>Жанр:</strong> {book.genre}
      </p>
      <p>
        <strong>Описание:</strong> {book.description}
      </p>
      <button onClick={handleDelete} className="delete-button">
        Удалить книгу
      </button>
    </div>
  );
};

export default BookDetail;
