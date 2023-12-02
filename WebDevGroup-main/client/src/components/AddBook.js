import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import './Design.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [length, setLength] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/products', {
        title,
        author,
        year,
        genre,
        length,
      });
      
      // Assuming the backend returns the added product data, you can use it as needed
      console.log('Added Book:', response.data);

      // Optionally, you can redirect to another page or do other actions upon successful addition
      navigate('/UserHomePage');
    } catch (error) {
      console.error('Error adding book:', error.message);
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

            <button type="submit">Add Book</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddBook;
