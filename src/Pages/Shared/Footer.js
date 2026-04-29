import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2 className="footer-logo">
            BESA<span>RENTAL</span>
          </h2>
          <p className="footer-tagline">
            Experience luxury on every mile. The most trusted car rental service
            in the city.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3 className="nav-title">Services</h3>
          <ul className="nav-ul">
            <li>
              <Link to="/">Premium Cars</Link>
            </li>
            <li>
              <Link to="/">Luxury Sedans</Link>
            </li>
            <li>
              <Link to="/">SUVs & Jeeps</Link>
            </li>
            <li>
              <Link to="/">Wedding Special</Link>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-links">
          <h3 className="nav-title">Support</h3>
          <ul className="nav-ul">
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Terms of Use</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              <Link to="/">Sitemap</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter or Contact */}
        <div className="footer-contact">
          <h3 className="nav-title">Contact Us</h3>
          <p>Dhaka, Bangladesh</p>
          <p>Email: supercar@gmail.com</p>
          <button className="contact-btn">Book Now</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {year} BESA RENTAL. Made with <span className="heart">♥</span>{" "}
          by Mazharul.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
