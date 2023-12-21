import React from 'react';
import Image from 'next/image';
import styles from '../styles/Collection.module.css';
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

function Collection() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      <div className={styles.container + " gallery-container"}>
        <h1>Our Collection</h1>
        <p className={styles.pageDescription + " text-center"}>Fluid Best Chairs Around</p>
        <div className={styles.tzGallery + " tz-gallery"}>
          <div className="row">
                <div className="col-sm-12 col-md-4">
                    <span className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/bridge.jpg">
                        <Image src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/bridge.jpg" alt="Bridge" width={500} height={500} />
                    </span>
                </div>
                <div className="col-sm-6 col-md-4">
                    <span className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/park.jpg">
                        <Image src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/park.jpg" alt="Park" width={500} height={500} />
                    </span>
                </div>
                <div className="col-sm-6 col-md-4">
                    <span className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/tunnel.jpg">
                        <Image src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/tunnel.jpg" alt="Tunnel" width={500} height={500} />
                    </span>
                </div>
                                    <div className="col-sm-12 col-md-8">
                                        <span className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/traffic.jpg">
                                            <Image src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/traffic.jpg" alt="Traffic" width={500} height={500} />
                                        </span>
                                    </div>
                                    <div className="col-sm-6 col-md-4">
                                        <span className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/rails.jpg">
                                            <Image src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/rails.jpg" alt="Coast" width={500} height={500} />
                                        </span>
                                    </div> 
                                    <div className="col-sm-6 col-md-4">
                                        <span className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg">
                                            <Image src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg" alt="Rails" width={500} height={500} />
                                        </span>
                                    </div>
                                    </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Collection;