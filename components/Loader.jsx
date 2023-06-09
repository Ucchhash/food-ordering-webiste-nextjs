import React from 'react';
import styles from 'styles/Ellipsis.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
