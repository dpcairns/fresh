import React from 'react';
import { connect } from 'react-redux';

import styles from './Detail.css';

const mapStateToProps = state => ({
  category: state.category,
  yummyThings: state.yummyThings
});

const Detail = ({ category, yummyThings }) => (
  <div className={styles.detail}>
    <div className={styles.title}>Category: {category}</div>

    <div className={styles.content}>
      <p>yummyThings, called by route thunk in routemap</p>
      <ul>{yummyThings.map(pkg => <li key={pkg}>{pkg}</li>)}</ul>
    </div>
  </div>
);

export default connect(mapStateToProps)(Detail);
