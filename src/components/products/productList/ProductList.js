import React from "react";

const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map((item, idx) => (
        <li key={idx}>{item.data}</li>
      ))}
    </ul>
  );
};

export default ProductList;
