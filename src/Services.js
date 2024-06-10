import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="Services" id='services'>
      <h2>Our Services</h2>
      <div className="Services-container">
        <div className="Service-card">
          <img src="https://example.com/service1.jpg" alt="Service 1" />
          <h3>Service 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="Service-card">
          <img src="https://example.com/service2.jpg" alt="Service 2" />
          <h3>Service 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="Service-card">
          <img src="https://example.com/service3.jpg" alt="Service 3" />
          <h3>Service 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
