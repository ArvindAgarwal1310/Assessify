import React from 'react';
import './App.css';
import HeaderImage from './assests/header-image.jpg';
function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="header-overlay">
          <h1 className="product-name">Assessify</h1>
        </div>
        <img src={HeaderImage} alt="Header Background" className="header-image" />
      </header>

      {/* Main Content */}
      <main>
        <section className="about-product">
          <h2>About</h2>
          <p>
            Assessify is an innovative solution for conducting interviews. It uses AI to generate
            intelligent questions, seamlessly integrates with platforms like Google Meet, and captures 
            candidate responses for evaluation. Elevate your hiring process with Assessify!
          </p>
        </section>
        <br />
        <section className="about-team">
          <h2>About the Team</h2>
          <p>
            We are a group of passionate developers, designers, and thinkers dedicated to building 
            software that makes a difference. Our mission is to simplify recruitment processes 
            through cutting-edge technology and AI-driven insights.
          </p>
          <ul className="team-list">
            <li>
              <strong>Arvind Agarwal</strong> - Founder & Lead Developer
              <br />
              <a href="https://www.linkedin.com/in/arvindagarwal1310/" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
              <br />
              <a href="https://agarwalarvind.com/" target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>
            </li>
            
          </ul>
        </section>

        <section className="contact">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you! Reach out to us at:</p>
          <p>
            <strong>Email:</strong> arvind@assessify.com
          </p>
          <p>
            <strong>Phone:</strong> +91 96182 33565
          </p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Assessify. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;