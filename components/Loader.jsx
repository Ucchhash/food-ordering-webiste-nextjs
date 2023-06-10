import React from 'react';
import styles from 'styles/Spinner.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loader;
