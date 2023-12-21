import React, { useState, useEffect } from "react";
import Link from 'next/link'; // Add this at the top of your file
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true); 

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  useEffect(() => {
    const handleScroll = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop){
         setIsNavHidden(true);
      } else {
         setIsNavHidden(false);
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar} ${isNavHidden ? styles.navbarHidden : ''}`}>
  
      <div className="container-fluid">
        <a className={`navbar-brand ${styles.navbarBrand}`} href="#">
        <svg className={styles.brandIcon} fill="#f8f7f7" xmlns="http://www.w3.org/2000/svg" width="30" height="50" viewBox="0 0 35 45">
            {<svg fill="#f8f7f7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.67 490.67" width="40" height="40">
    <g>
        <rect x="122.667" y="475.336" width="46" height="15.334"></rect>
        <rect x="322.265" y="475.336" width="46.001" height="15.334"></rect>
        <rect x="222.335" y="475.336" width="46" height="15.334"></rect>
        <path d="M368.003,253.001h30.666c12.683,0,23.001-10.318,23.001-23c0-12.683-10.318-23.001-23.001-23.001h-30.666 c-12.683,0-23.001,10.318-23.001,23.001v61.333h-15.333V42.677C329.669,19.145,310.523,0,286.991,0h-83.313 c-23.532,0-42.677,19.145-42.677,42.677v248.657h-15.334v-61.333c0-12.683-10.318-23.001-23-23.001H92 c-12.682,0-23,10.318-23,23.001c0,12.682,10.318,23,23,23h30.667c2.688,0,5.267-0.468,7.667-1.319v39.652h-3.833 c-19.024,0-34.5,15.478-34.5,34.501s15.476,34.5,34.5,34.5h81.272c3.057,14.998,14.897,26.839,29.896,29.896v39.104h-99.923 v38.334h15.333v-23h84.59v23h15.333v-23h84.334v23h15.334v-38.334h-99.667v-39.104c14.998-3.057,26.839-14.897,29.895-29.896 h81.272c19.023,0,34.501-15.477,34.501-34.5s-15.478-34.501-34.501-34.501h-3.833v-39.652 C362.736,252.534,365.315,253.001,368.003,253.001z M176.334,42.677c0-15.078,12.267-27.344,27.344-27.344h83.313 c15.077,0,27.344,12.267,27.344,27.344v248.657H176.334V42.677z M122.667,237.667H92c-4.228,0-7.667-3.438-7.667-7.666 c0-4.228,3.439-7.667,7.667-7.667h30.667c4.228,0,7.667,3.439,7.667,7.667C130.334,234.229,126.895,237.667,122.667,237.667z M245.335,375.668c-9.995,0-18.517-6.41-21.682-15.333h43.363C263.852,369.259,255.33,375.668,245.335,375.668z M364.169,306.669 c10.569-0.001,19.167,8.597,19.167,19.167c0,10.568-8.598,19.166-19.167,19.166H126.501c-10.568,0-19.167-8.598-19.167-19.166 c0-10.569,8.599-19.167,19.167-19.167h34.501h168.667H364.169z M360.336,230.002c0-4.228,3.439-7.667,7.667-7.667h30.666 c4.228,0,7.667,3.439,7.667,7.667c0,4.228-3.439,7.666-7.667,7.666h-30.666C363.776,237.668,360.336,234.23,360.336,230.002z"></path>
    </g>
</svg>
}
          </svg>
          SitStyle</a>
        <button 
          className={`navbar-toggler ${styles.navbarToggler}`} 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded={!isNavCollapsed ? true : false} 
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="7" x2="26" y2="7"></line>
            <line x1="4" y1="15" x2="26" y2="15"></line>
            <line x1="4" y1="23" x2="26" y2="23"></line>
          </svg>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className={`navbar-nav ${styles.navbarNav}  ${styles.navLinkActive}`}>
                      <li className={`nav-item ${styles.navItem}`}>
                            <span className={`nav-link ${styles.navLink}`} href="#">HOME</span>
                       </li>
                       <li className={`nav-item ${styles.navItem}`}>
                      <Link href="components/Collection.js">
                           <span className={`nav-link ${styles.navLink}`}>COLLECTION</span>
                              </Link>     
                    </li>
                      <li className={`nav-item ${styles.navItem}`}>
                          <span className={`nav-link ${styles.navLink}`} href="#">GALLERY</span>
                      </li>
                      <li className={`nav-item ${styles.navItem}`}>
                          <span className={`nav-link ${styles.navLink}`} href="#">CONTACT</span>
                      </li>
                      <li className={`nav-item ${styles.navItem}`}>
                          <span className={`nav-link ${styles.navLink}`} href="#">ABOUT</span>

                      </li>
                      <li className="nav-item">
                      <span className={`nav-link ${styles.icons}`}>
                          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" strokeOpacity="0.3" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>

                          </span>

                      </li>
                      <li className="nav-item">
                      <span className={`nav-link ${styles.icons}`}>
                          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1" strokeOpacity="0.3" />
            <circle cx="20" cy="21" r="1" strokeOpacity="0.3" />
            <path d="M1 1h4l3 14a2 2 0 0 0 2 1.99h10a2 2 0 0 0 2-1.99L23 6H6" />
            <line x1="3" y1="6" x2="3" y2="6" />
          </svg>

                          </span>

                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  );
};

export default Navbar;
