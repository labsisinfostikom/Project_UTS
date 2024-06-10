import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="Contact" id='contact'>
      <div className="Contact-container">
        <div className="Contact-card">
          <i className="fas fa-map-marker-alt fa-2x"></i>
          <h3>Location</h3>
          <p>123 Main Street, City, Country</p>
        </div>
        <div className="Contact-card">
          <i className="fas fa-phone fa-2x"></i>
          <h3>Phone</h3>
          <p>+123 456 7890</p>
        </div>
        <div className="Contact-card">
          <i className="fas fa-envelope fa-2x"></i>
          <h3>Email</h3>
          <p>info@example.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
