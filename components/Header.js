import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faEnvelope, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link href="/" passHref>
            <a className="navbar-brand">SitStyle</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/" passHref>
                  <a className="nav-link">HOME</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/collection" passHref>
                  <a className="nav-link">COLLECTION</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/gallery" passHref>
                  <a className="nav-link">GALLERY</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact-us" passHref>
                  <a className="nav-link">CONTACT US</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" passHref>
                  <a className="nav-link">ABOUT</a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <FontAwesomeIcon icon={faSearch} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
