import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Services from './Services';
import Contact from './Contact';
function App() {
  return (
    <div className="App">
      
      <header className="App-header">

        <h1>Company Name</h1>
        <nav>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
      <Welcome />
        <section id="about">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in justo eget odio viverra sodales.</p>
        </section>
        <Services />
         <Contact />
      </main>
      <footer>
        <p>&copy; 2024 Company Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
