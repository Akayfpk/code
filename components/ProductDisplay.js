import React from 'react';
import Image from 'next/image';
import styles from '../styles/ProductSection.module.css';
import chairImage from '../public/chair.png';

const ProductDisplay = () => {
  return (
    <section className={styles.productSection}>
      <div className={styles.productContent}>
        <div className={`row ${styles.myCustomGrid}`}>
          {/* Text Section */}
          <div className="col-md-6" style={{ order: 1 }}>
            <h1 className={styles.productTitle}>Costway</h1>
            <h2 className={styles.productSubtitle}>Mid-Century Accent Chair</h2>
            <p className={styles.productDescription}>
              The Rivet Julie Mid-Century Modern Chair combines sleek design with comfort.
              Its clean lines and sturdy construction make it an ideal choice for any modern living space.
            </p>
            

          {/* Image Section */}
          <div className="col-md-6" style={{ order: 2 }}>
            <div className={styles.productImage}>
              <Image src={chairImage} alt="Mid-Century Accent Chair" width={300} height={300} />
            </div>
          </div>
          {/* Color options */}
          <div className={styles.colorOptions}>
              <div className={styles.colorOption} style={{ backgroundColor: 'blue' }}></div>
              <div className={styles.colorOption} style={{ backgroundColor: 'red' }}></div>
              <div className={styles.colorOption} style={{ backgroundColor: 'green' }}></div>
            </div>
          </div>

          {/* Price and Actions Section */}
          <div className="col-8" style={{ order: 3 }}>
            <div className={styles.priceRating}>
              <span className={styles.price}>$199.99</span>
              <div className={styles.rating}>
                <span className={styles.filledStar}>★</span>
                <span className={styles.filledStar}>★</span>
                <span className={styles.filledStar}>★</span>
                <span className={styles.filledStar}>★</span>
                <span className={styles.emptyStar}>★</span>
                (1000+ Reviews)
              </div>
            </div>
            <div className={styles.productActions}>
              <div className="row">
                <div className="col-6">
                  <button className={`btn btn-outline-primary btn-block ${styles.button} ${styles.buyNow}`}>Buy Now</button>
                </div>
                <div className="col-6">
                  <button className={`btn btn-outline-primary btn-block ${styles.button} ${styles.addToCart}`}>Add&nbsp;to&nbsp;Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
