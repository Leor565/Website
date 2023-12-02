import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCollection from './BookCollection';
import Footer from './Footer';
import './Design.css';

const UserHomePage = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId'); 
  
      if (!token || !userId) {
        console.log('No token or user ID found');
        // Redirect to login page or handle appropriately
        return;
      }
  
      try {
        const response = await axios.get(`http://localhost:3000/api/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
  
        setUserData(response.data); // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error appropriately
      }
    };
  
    fetchUserData();
  }, []);
  
  return (
    <div className="page-container">
      <div className="content-wrap">
        <h2>Welcome, {userData.name || 'User'}!</h2> {/* Displaying the user's name */}
        <h3 className="collection-title">Our Collection</h3>
        <BookCollection />
      </div>
      <Footer />
    </div>
  );
};

export default UserHomePage;
