import React from 'react';

import styles from './Home.css';

const Home = () => (
  <div className={styles.home}>
    <div className={styles.title}>HOME</div>
    <div className={styles.content}>
      a separate style sheet from the detail page
    </div>
  </div>
);

export default Home;
