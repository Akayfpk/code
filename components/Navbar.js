import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Inline style for nav item spacing
  const navItemStyle = {
    marginRight: '20px', // Adjust the spacing as needed
    padding: '0 1rem',
  };

  const contactUsStyle = {
    paddingRight: '0',
  };


  return (
    <nav className={styles.navbar}>
      <Link href="/" passHref>
        <span className={styles.navbarBrand}>SitStyle</span>
      </Link>

      <button className={styles.navbarToggler} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
        ☰
      </button>

      <div className={`${styles.navbarNav} ${isOpen ? styles.show : ''}`}>
        <Link href="/Home" passHref>
          <span className={styles.navLink} style={navItemStyle}>HOME</span>
        </Link>
        
        <Link href="/collection" passHref>
          <span className={styles.navLink} style={navItemStyle}>COLLECTION</span>
        </Link>
        <Link href="/GALLERY" passHref>
          <span className={styles.navLink} style={navItemStyle}>GALLERY</span>
        </Link>
        <Link href="/contact-us" passHref>
          <span className={styles.navLink} style={contactUsStyle}>CONTACT US</span>
        </Link>
        <Link href="/ABOUT" passHref>
          <span className={styles.navLink} style={navItemStyle}>ABOUT</span>
        </Link>
      </div>

      <div className="d-flex">
        <span className={styles.icon}>🔍</span>
        <span className={styles.icon}>🛒</span>
      </div>
    </nav>
  );
};

export default Navbar;
