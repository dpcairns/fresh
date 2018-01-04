import React from 'react';

import Header from '../Components/Header/Header';
import PageBox from '../Components/PageBox/PageBox';

import styles from './App.css';

const App = () => (
  <div className={styles.app}>
    <Header />
    <PageBox />
  </div>
);

export default App;
