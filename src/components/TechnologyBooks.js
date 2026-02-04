import React from "react";
import "./TechnologyBooks.css";

function TechnologyBooks() {
  const books = [
    { title: "Clean Code", author: "Robert C. Martin" },
    { title: "JavaScript: The Good Parts", author: "Douglas Crockford" },
    { title: "React – Up & Running", author: "Stoyan Stefanov" },
    { title: "Cracking the Coding Interview", author: "Gayle Laakmann" },
  ];

  return (
    <div className="tech-books-container">
      <h2>Technology Books</h2>

      <div className="books-grid">
        {books.map((book, i) => (
          <div key={i} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechnologyBooks;
