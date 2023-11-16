// src/components/Layout.js
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      <main className="mt-5"> {/* Add margin-top for space */}
        {children}
      </main>
      <Footer className="mt-5" /> {/* Add margin-top for space */}
    </div>
  );
};

export default Layout;
