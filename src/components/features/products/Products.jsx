import React from "react";
import productsData from "./productsData";
import { Link } from "react-router-dom";
import { Pagination } from 'antd';

const Products = () => {
  const products = productsData.map(product => {
    return (
      <div key={product.id}>
        <h3>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p>Price: ${product.price}</p>
        <hr />
      </div>
    );
  });

  return (
    <>
      <h1>Products Page</h1>
      {products}
      <Pagination defaultCurrent={1} total={50} />
    </>
  );
};




export default Products;