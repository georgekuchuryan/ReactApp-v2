import React from 'react';
import styles from './mainPage.module.scss';
import Catalog from '../Catalog/Catalog';

const MainPage = () => (
  <div className={styles.MainPage}>
    
    <Catalog/>
  </div>
);

export default MainPage;
