import React from 'react';
import universal from 'react-universal-component';

import styles from './UniversalComponent.css';

const UniversalComponent = universal(
  ({ page }) => import(`../${page}/${page}`),
  {
    minDelay: 500,

    loading: () => (
      <div className={styles.spinner}>
        <div />
      </div>
    ),

    error: () => <div className={styles.notFound}>PAGE NOT FOUND - 404</div>
  }
);

export default UniversalComponent;
