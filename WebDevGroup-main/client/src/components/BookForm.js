// BookForm.js
import React, { useState } from 'react';

const BookForm = ({ onSubmit, onUpdate, initialData }) => {
  const [title, setTitle] = useState(initialData ? initialData.title : '');
  const [author, setAuthor] = useState(initialData ? initialData.author : '');
  const [year, setYear] = useState(initialData ? initialData.year : '');
  const [genre, setGenre] = useState(initialData ? initialData.genre : '');
  const [length, setLength] = useState(initialData ? initialData.length : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookData = { title, author, year, genre, length };

    // If initialData is provided, it means we are updating
    if (initialData) {
      onUpdate(initialData.title, bookData);
    } else {
      onSubmit(bookData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Author:
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <label>
        Year:
        <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
      </label>
      <label>
        Genre:
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
      </label>
      <label>
        Length:
        <input type="text" value={length} onChange={(e) => setLength(e.target.value)} />
      </label>
      <button type="submit">{initialData ? 'Update Book' : 'Add Book'}</button>
    </form>
  );
};

export default BookForm;
