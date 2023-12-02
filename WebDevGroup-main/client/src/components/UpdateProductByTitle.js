// UpdateProductByTitle.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import './Design.css';

const UpdateProductByTitle = ({ onUpdateProduct }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [length, setLength] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedData = {
        title,
        author,
        year,
        genre,
        length,
      };

      // Assuming the backend returns the updated product data, you can use it as needed
      await onUpdateProduct(title, updatedData);

      // Optionally, you can redirect to another page or do other actions upon successful update
      navigate('/UserHomePage');
    } catch (error) {
      console.error('Error updating book:', error.message);
      // Handle errors here
    }
  };

  return (
    <div className="page-container">
      <div className="content-wrap">
        <div className="auth-form">
          <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

            <label>Author:</label>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />

            <label>Year:</label>
            <input type="text" value={year} onChange={(e) => setYear(e.target.value)} required />

            <label>Genre:</label>
            <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required />

            <label>Length:</label>
            <input type="text" value={length} onChange={(e) => setLength(e.target.value)} required />

            <button type="submit">Update Book</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateProductByTitle;
