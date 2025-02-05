import React from "react";
import { productdata } from "../data";
import { Link } from "react-router-dom";

function Products(){
    return(
    <div className="product-main">
        <div className="product-title">
            Phones
        </div>
        <div className="product-card">
            {productdata.map((data, key) => {
                return (
                    <Link className="product-clickable"to={`/products/${data.id}`}>
                    <div className="product" key={key}>
                    <img src={data.picture} />
                        <div className="product-name">{data.name} </div>
                        <div className="prodcut-price"> {"Price " + "£" + data.cost} </div>
                        <div className="product-stock">{"Stock left: " + data.stock} </div>
                    </div>
                    </Link>
                )
            })}
        </div>
    </div>
    )
}

export default Products;