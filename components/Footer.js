import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import social icons

const Footer = () => {
  const footerStyle = {
    /*backgroundColor: "#00b7eb",*/ // Uncomment and set desired background color
    color: "#ffffff", // Text color
    padding: "2rem 0",
  };

  return (
    <footer className="footer" style={footerStyle}>
      <div className="container">
        <div className="row">
          {/* Social Media Links */}
          <div className="col-md-3 socialMediaLinks"style={{
              marginLeft: '-40px',
              marginTop: '100px'}}>
            <div className="d-flex align-items-center socialMediaHeader">
              <h6 className="text-uppercase mb-0 mr-3 followUsTitle">Follow us</h6>
              <ul className="list-unstyled d-flex mb-0 socialMediaList">
                {/* Facebook */}
                <li className="mr-3 socialMediaItem">
                  <Link href="https://facebook.com" passHref>
                    <span className="socialIconLink" target="_blank" rel="noopener noreferrer">
                      <FaFacebook className="socialIcon" size={20} />
                    </span>
                  </Link>
                </li>
                {/* Twitter */}
                <li className="mr-3 socialMediaItem">
                  <Link href="https://twitter.com" passHref>
                    <span className="socialIconLink" target="_blank" rel="noopener noreferrer">
                      <FaTwitter className="socialIcon" size={20} />
                    </span>
                  </Link>
                </li>
                {/* Instagram */}
                <li className="socialMediaItem
                ">
                  <Link href="https://instagram.com" passHref>
                    <span className="socialIconLink" target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="socialIcon" size={20} />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          
 {/* Additional Information Button */}
 <div className="col-md-3 text-center infoButtonSection">
            <button 
              className="btn btn-link text-white" 
              style={{
                textAlign: 'center',
                backgroundColor: '#06a7ee',
                color: '#ffffff',
                border: 'none',
                borderRadius: '16.5px',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                fontSize: '18px',
                display: 'inline-block',
                width: '150px',
                height: '40px',
                marginLeft: '120px',
                marginTop: '-10px,'
              }}
            >
              See More
              <svg width="90" height="20" style={{ marginLeft: '100px' ,verticalAlign: 'middle' }}>
                {/* Downward arrows */}
                <g fill="#ffffff" transform="translate(0, 0)">
                  {/* First arrow line and head */}
                  <line x1="0" y1="0" x2="0" y2="5" stroke="#ffffff" strokeLinecap="round" strokeWidth="2"/>
                  <line x1="-2" y1="3" x2="0" y2="5" stroke="#ffffff" strokeLinecap="round" strokeWidth="2"/>
                  <line x1="0" y1="5" x2="2" y2="3" stroke="#ffffff" strokeLinecap="round" strokeWidth="2"/>
                </g>
                <g fill="#ffffff" transform="translate(10, 0)">
                  {/* Second arrow line and head */}
                  <line x1="0" y1="0" x2="0" y2="5" stroke="#ffffff" strokeLinecap="round" strokeWidth="2"/>
                  <line x1="-2" y1="3" x2="0" y2="5" stroke="#ffffff" strokeLinecap="round" strokeWidth="2"/>
                  <line x1="0" y1="5" x2="2" y2="3" stroke="#ffffff" strokeLinecap="round" strokeWidth="2"/>
                </g>
              </svg>
            </button>
          </div>

          {/* Footer Text */}
          <div className="text-center py-4 footerText">
            <p>© 2023 My Hotel. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;