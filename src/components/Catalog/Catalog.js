import React, {useEffect, useState } from "react";

import styles from "./Catalog.module.scss";
import CatalogItem from "../CatalogItem/CatalogItem";
import CheckBox from "../checkBox/checkBox";
import data from "/George_Kuchuryan/ReactApp-v2/src/api/data.json"


const Catalog = () => {

const [productList, setProductList] = useState(data.productList);

const [brandListFilter, setBrandListFilter] = useState ([]);

useEffect(() => {
  createBrandFilter();
}, [])

const createBrandFilter = () => {
const brands = data.productList.map(product => product.brand);
setBrandListFilter([...new Set(brands)]);

}

const filterByBrand = (brandName, checked) => {
	console.log(brandName, checked)
	console.log(productList)
    const newProductList = [];
    if (checked) {
        productList.forEach(product => {
			console.log(product)
            if (brandName === product.brand) {
                newProductList.push(product);
            }
        });
		console.log('newProductList', newProductList)
		setProductList(newProductList);
    }
}

  return (
    <div className={styles.Catalog}>
      <div className="album py-5 bg-light">
        <div className="container">
         <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
            productList.map((item) => {
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
          <div className=''>
    <h2 className='filters__title'>Material</h2>
    <div className='d-flex'>
        <form>
            {
                brandListFilter.map((el, id) => {
                    return (
                        <div key={id} className='mb-3'>
                            <input id={el} type="checkbox"
                                   checked={el.value}
                                   onChange={e => filterByBrand(el, e.target.checked)}
                                  />
                            <label htmlFor={el}>{el}</label> 
                        </div>
                    )
                })
            }
        </form>
    </div>
</div>
        </div>
      </div>
      
    </div>
  );
};

Catalog.propTypes = {};

Catalog.defaultProps = {};

export default Catalog;
