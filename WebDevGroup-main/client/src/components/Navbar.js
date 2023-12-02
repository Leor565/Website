// Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Design.css';

const Navbar = ({ isAuthenticated, userName }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img src="/images/logo.png" alt="Logo" className="navbar-logo" />
      </Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/add-book">Add Book</Link>
        <Link to="/delete-product-by-title">Remove Books by Title</Link>
        <Link to="/search">Search by Title</Link>
        <Link to="/update-product-by-title">Update Book</Link>
        {!isAuthenticated && <Link to="/signin">Login</Link>}
        {!isAuthenticated && <Link to="/signup">Register</Link>}
        {isAuthenticated && (
          <>
            <div className="dropdown">
              <button className="dropbtn">My Profile</button>
              <div className="dropdown-content">
                <Link to="/view-profile">View My Profile</Link>
                <Link to="/edit-profile">Update My Profile</Link>
                <Link to="/delete-account">Delete Account</Link>
                <Link to="/view-users">View Fellow Users</Link>
              </div>
            </div>
            <button onClick={handleLogout} className="logout-button">Sign Out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
