import Navbar from './Navbar';
import Footer from './Footer';
import Collection from './Collection'; // Make sure the path is correct
import { motion } from 'framer-motion';

const pageTransition = {
  initial: {
    opacity: 0,
    y: "-100vh",
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "100vh",
  }
};

const Layout = ({ children }) => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="mt-5">
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageTransition}
        >
          {children}
        </motion.div>
      </main>
      <div style={{ marginTop: '28%' }}>
       
      </div>
      <Footer />
    </div>
  );
};

export default Layout;