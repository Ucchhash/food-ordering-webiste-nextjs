import Link from 'next/link';
import React from 'react';
import styles from 'styles/Notification.module.css';

const Notification = () => {
  return (
    <div className={styles.notification}>
      <h1 className={styles.header}>Item has been added to cart.</h1>
      <Link href="/cart" passHref>
        <span className={styles.button}>Go to Cart</span>
      </Link>
    </div>
  );
};

export default Notification;
