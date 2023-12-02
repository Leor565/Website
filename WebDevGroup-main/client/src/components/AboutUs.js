import React from 'react';
import Footer from './Footer';
import './Design.css';

const AboutUs = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <div className="about-us-container">
          <h2 className="about-us-title">Our Team</h2>
          <div className="team-members">
            {/* Repeat this block for each team member */}
            <div className="team-member">
              <img src="/path_to_member_photo.jpg" alt="Member Name" className="team-member-photo" />
              <h3 className="team-member-name">Member Name</h3>
              <p className="team-member-description">Brief description or bio of the team member.</p>
            </div>
            {/* End of team member block */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
