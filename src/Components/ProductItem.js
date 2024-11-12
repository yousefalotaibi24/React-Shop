import React from "react";

const ProductItem = (props) => {
  return (
    <div>
      <img className="Product-Image" src={props.myproduct.Image}></img>
      <p>{props.myproduct.name} </p>
      <p>{props.myproduct.price} </p>
    </div>
  );
};

export default ProductItem;
