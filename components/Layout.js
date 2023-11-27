import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="mt-5">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
