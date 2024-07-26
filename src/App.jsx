import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import BookForm from "./components/BookForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/add" element={<BookForm />} />
          <Route path="/edit/:id" element={<BookForm />} />
          <Route path="/books/:id" element={<BookDetail />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
