import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import data from "./../../api/data.json";


const ProductPage = () => {
    let { id } = useParams();

    const [product, setProduct] = useState('');
    
    useEffect(() => {
        getProduct();
    }, [id])
    
    const getProduct = () => {
        const selectProduct = data.productList.find(item => +item.id === +id);
        console.log('selectProduct', selectProduct);
        setProduct(selectProduct);
    };
return(
<div className="p-5 mb-4 bg-light rounded-3">
    <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Custom jumbotron</h1>
        <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one
            in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to
            your liking.</p>
        <button className="btn btn-primary btn-lg" type="button">Example button</button>
    </div>
</div>
)
}


export default ProductPage;