import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Управление библиотекой</h1>
      <nav>
        <Link to="/">Список книг</Link>
        <Link to="/add">Добавить книгу</Link>
      </nav>
    </header>
  );
};

export default Header;
