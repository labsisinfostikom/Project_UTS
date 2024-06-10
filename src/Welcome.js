import React from 'react';
import './Welcome.css';

function Welcome() {
  return (
    <div className="Welcome">
      <div className="Welcome-content">
        <h1>Welcome to Our Company</h1>
        <p>We strive to deliver excellence in everything we do.</p>
        <a href="#about" className="btn btn-primary">Learn More</a>
      </div>
    </div>
  );
}

export default Welcome;
