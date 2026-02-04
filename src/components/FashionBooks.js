import React from "react";
import "./FashionBooks.css";

function FashionBooks() {
  const books = [
    { title: "The Little Dictionary of Fashion", author: "Christian Dior" },
    { title: "Fashionopolis", author: "Dana Thomas" },
    { title: "The Fashion Book", author: "Phaidon Editors" },
    { title: "Influence", author: "Mary-Kate & Ashley Olsen" }
  ];

  return (
    <div className="fashion-books-container">
      <h2>Fashion Books</h2>

      <div className="fashion-books-grid">
        {books.map((book, index) => (
          <div key={index} className="fashion-book-card">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FashionBooks;
