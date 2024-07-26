import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, updateBook } from "../redux/actions/bookActions";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/BookForm.css";

const BookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: "",
    genre: "",
    description: "",
  });

  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector((state) => state.books.find((b) => b.id === id));

  useEffect(() => {
    if (book) {
      setFormData(book);
    }
  }, [book]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateBook(id, formData));
    } else {
      dispatch(addBook(formData));
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Название"
      />
      <input
        name="author"
        value={formData.author}
        onChange={handleChange}
        placeholder="Автор"
      />
      <input
        name="year"
        value={formData.year}
        onChange={handleChange}
        placeholder="Год издания"
      />
      <input
        name="genre"
        value={formData.genre}
        onChange={handleChange}
        placeholder="Жанр"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Описание"
      ></textarea>
      <button type="submit">{id ? "Обновить" : "Добавить"}</button>
    </form>
  );
};

export default BookForm;
