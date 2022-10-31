import React from "react";

import styles from "./Catalog.module.scss";
import CatalogItem from "../CatalogItem/CatalogItem";
import CheckBox from "../checkBox/checkBox";

const Catalog = () => {
  const productList = [
    {
      id: 1,
      brand: "Apple",
      name: "Apple Iphone 14 Pro Max",
      color: "Purple",
      "memory size": "512 GB",
      "display diagonal": "6.7",
      material: "Ceramic Shield",
      price: "70 000₴",
      url: "https://content2.rozetka.com.ua/goods/images/big/284924197.jpg",
    },
    {
      id: 2,
      brand: "Samsung",
      name: "Samsung Galaxy Fold 4",
      color: "Graygreen",
      "memory size": "512 GB",
      "display diagonal": "6.2",
      material: "aluminum + glass",
      price: "79 999₴",
      url: "https://content1.rozetka.com.ua/goods/images/big/292002198.jpg",
    },
    {
      id: 3,
      brand: "Xiaomi",
      name: "Xiaomi Mi 11 Ultra",
      color: "White",
      "memory size": "512 GB",
      "display diagonal": "6.81",
      material: "Ceramic",
      price: "44 581₴",
      url: "https://content.rozetka.com.ua/goods/images/big/288817287.jpg",
    },
    {
      id: 4,
      brand: "Huawei",
      name: "Huawei P50 Pocket",
      color: "White",
      "memory size": "256 GB",
      "display diagonal": "6.9",
      material: "Ceramic + glass",
      price: "43 420₴",
      url: "https://content1.rozetka.com.ua/goods/images/big/282509740.jpg",
    },
    {
      id: 5,
      brand: "Apple",
      name: "Apple iPhone 13 Pro Max",
      color: "Alpine Green",
      "memory size": "256 GB",
      "display diagonal": "6.7",
      material: "Ceramic + glass",
      price: "48 999₴",
      url: "https://content1.rozetka.com.ua/goods/images/big/259416164.jpg",
    },
    {
      id: 6,
      brand: "Samsung",
      name: "Samsung Galaxy S21",
      color: "Lavender",
      "memory size": "128 GB",
      "display diagonal": "6.4",
      material: "Glass",
      price: "24 999₴",
      url: "https://content.rozetka.com.ua/goods/images/big/245951562.jpg",
    },
  ];

  return (
    <div className={styles.Catalog}>
      <div className="album py-5 bg-light">
        <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {productList.map((item) => {
              return (
                <div className="col" key={item.id}>
                  <CatalogItem
                    url={item.url}
                    name={item.name}
                    color={item.color}
                    price={item.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

Catalog.propTypes = {};

Catalog.defaultProps = {};

export default Catalog;
