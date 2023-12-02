import React from 'react';
import './Design.css';

const BookCollection = () => {
  // Array of book data, now including title and author
  const books = [
    { id: 1, title: "EARTHLY BODIES", author: "by Susan Earlam", image: "/images/book1.jpg" },
    { id: 2, title: "MEMORY", author: "by Angelina Aludo", image: "/images/book2.jpg" },
    { id: 3, title: "A MILLION TO ONE", author: "by Tony Faggioli", image: "/images/book3.jpg" },
    { id: 4, title: "ONLY WORDS", author: "by Summer Kiska", image: "/images/book4.jpg" },
    { id: 5, title: "DREAMS FROM NEPAL", author: "by Bikul Kiorala", image: "/images/book5.jpg" },
    { id: 6, title: "SOM EPEACE OF MIND", author: "by Adrien Bienvenue", image: "/images/book6.jpg" },
    // ... add all 6 books here
  ];

  return (
    <div className="book-collection">
      {books.map(book => (
        <div key={book.id} className="book-item">
          <fieldset>
            <legend>
              <img src="/images/mark.jpg" alt="Mark" />
            </legend>
            <div className="book-info">
              <h4>{book.title}</h4>
              <p>{book.author}</p>
            </div>
            <img src={book.image} alt={book.title} />
          </fieldset>
        </div>
      ))}
    </div>
  );
};

export default BookCollection;
