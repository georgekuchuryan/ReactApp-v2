import React from "react";
import styles from "./mainPage.module.scss";
import Catalog from "../Catalog/Catalog";
import CheckBox from "../checkBox/checkBox";

const MainPage = () => (
  <div className={styles.MainPage}>
    <CheckBox/>
    <Catalog />
  </div>
);

export default MainPage;
