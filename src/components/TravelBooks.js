import React from "react";
import "./TravelBooks.css";

function TravelBooks() {
  const books = [
    { title: "Into the Wild", author: "Jon Krakauer" },
    { title: "Vagabonding", author: "Rolf Potts" },
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "Eat Pray Love", author: "Elizabeth Gilbert" }
  ];

  return (
    <div className="travel-books-container">
      <h2>Travel Books</h2>

      <div className="travel-books-grid">
        {books.map((book, index) => (
          <div key={index} className="travel-book-card">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelBooks;
