import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import social icons

const Footer = () => {
  const footerStyle = {
    
  };

  return (
    <footer className="footer" style={footerStyle}>
      <div className="container">
        <div className="socials">
          {/* Social Media Links */}
          <div className="col-md-2 socialMediaLinks" style={{
                   }}>
            <div className="d-flex align-items-center socialMediaHeader">
              <h6 className="text-uppercase mb-0 mr-7 followUsTitle">
                <span style={{ whiteSpace: 'nowrap' }}>Follow us</span>
              </h6>
              <ul className="list-unstyled d-flex mb-0 socialMediaList">
                {/* Facebook */}
                <li className="mr-2 socialMediaItem">
                  <Link href="https://facebook.com" passHref>
                    <span className="socialIconLink" target="_blank" rel="noopener noreferrer">
                      <FaFacebook className="socialIcon" size={20} />
                    </span>
                  </Link>
                </li>
                {/* Twitter */}
                <li className="mr-2 socialMediaItem">
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
 

          {/* Footer Text */}
          <div className="text-center py-4 footerText">
            <p>© 2023 SitStyle. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;