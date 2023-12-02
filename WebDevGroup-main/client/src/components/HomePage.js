import React from 'react';
import Navbar from './Navbar';
import BookCollection from './BookCollection';
import Footer from './Footer';
import './Design.css';

const HomePage = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <div className="slogan-container">
          <img src="/images/bookshelve.jpg" alt="Background" className="background-image"/>
          <div className="slogan-text">
            <p>"Your Favorite Books,</p>
            <p>All in One Place"</p>
          </div>
        </div>
        <h3 className="collection-title">Our Collection</h3>
        <BookCollection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
