import React from "react";
import "./SportsBooks.css";

function SportsBooks() {
  const books = [
    { title: "The Sports Gene", author: "David Epstein" },
    { title: "Moneyball", author: "Michael Lewis" },
    { title: "Shoe Dog (Nike Founder Story)", author: "Phil Knight" },
    { title: "The Champion’s Mind", author: "Jim Afremow" },
  ];

  return (
    <div className="sports-books-container">
      <h2>Sports Books</h2>

      <div className="sports-books-grid">
        {books.map((book, i) => (
          <div key={i} className="sports-book-card">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SportsBooks;
