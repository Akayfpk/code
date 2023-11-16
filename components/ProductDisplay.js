import React from 'react';
import Image from 'next/image';
import styles from '../styles/ProductSection.module.css'; // Adjust the path as necessary
import chairImage from '../public/chair.png'; // Ensure the path to your chair image is correct

const ProductDisplay = () => {
  return (
    <section className={styles.productSection}>
      <div className={styles.productContent}>
        <div className="row">
          {/* Switched the order of the columns here */}
          <div className="col-md-6">
            <h1 className={styles.productTitle}>Costway</h1>
            <h2 className={styles.productSubtitle}>Mid-Century Accent Chair</h2>
            <p className={styles.productDescription}>
              The Rivet Julie Mid-Century Modern Chair combines sleek design with comfort.
              Its clean lines and sturdy construction make it an ideal choice for any modern living space.
            </p>
            {/* Color options and other details */}
            <div className={styles.colorOptions}>
              {/* Render color options here */}
              <div className={styles.colorOption} style={{ backgroundColor: 'blue' }}></div>
              <div className={styles.colorOption} style={{ backgroundColor: 'red' }}></div>
              <div className={styles.colorOption} style={{ backgroundColor: 'green' }}></div>
            </div>
            <div className={styles.priceRating}>
              <span className={styles.price}>$199.99</span>
              {/* Rating would be displayed here */}
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
                  {/* Apply the custom styles along with any additional classes as needed */}
                  <button className={`btn btn-outline-primary btn-block ${styles.button} ${styles.buyNow}`}>Buy Now</button>
                </div>
                <div className="col-6">
                  {/* Apply the custom styles along with any additional classes as needed */}
                  <button className={`btn btn-outline-primary btn-block ${styles.button} ${styles.addToCart}`}>Add&nbsp;to&nbsp;Cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.productImage}>
              <Image src={chairImage} alt="Mid-Century Accent Chair" width={300} height={300} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
