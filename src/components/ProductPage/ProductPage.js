import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "./../../api/data.json";
import styles from "../ProductPage/ProductPage.scss";
import Catalog from "../Catalog/Catalog";

const ProductPage = (item) => {
  let { id } = useParams();
  const catalog = Catalog;
  const [product, setProduct] = useState("");
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    getProduct();
  }, [id]);

  const getProduct = () => {
    const selectProduct = data.productList.find((item) => +item.id === +id);

    setProduct(selectProduct);
    console.log(selectProduct);
  };
  return (
    <div className="parent-div">
      <button className="atuin-btn" onClick={goBack}>
        Go back
      </button>

      <h1 className="product__title">
        {" "}
        Мобільний телефон <span className="red">{product.name} </span>
        {product.color} {product.memory_size}
      </h1>

      <div className="card">
        <div className="img">
          <img className="imgPhone" src={product.url} alt="phone" />
        </div>
        <div class="content-wrap">
          <p class="price">{product.price}</p>
          <h3 class="title">{product.brand}</h3>
          <p class="description">{product.description} </p>
          <div class="toggle-wrap">
            <a className="toggle-buy" href="#">
              BUY
            </a>
            <button className="toggle-info">Add to bag!</button>
          </div>
        </div>
      </div>

      {/* <div className="img">
      <img className="imgPhone" src={product.url} alt="phone"/>
      <div>
      <p className="text-phone">{product.description}</p>
      
        </div>
      </div> */}
    </div>
  );
};

export default ProductPage;
