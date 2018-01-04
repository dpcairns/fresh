import React from 'react';
import { connect } from 'react-redux';
import UniversalComponent from '../../Routes/UniversalComponent/UniversalComponent.js';

import styles from './PageBox.css';

const mapStateToProps = state => ({
  page: state.page
});

const PageBox = ({ page }) => (
  <div className={styles.PageBox}>
    <UniversalComponent page={page} />
  </div>
);

export default connect(mapStateToProps)(PageBox);
