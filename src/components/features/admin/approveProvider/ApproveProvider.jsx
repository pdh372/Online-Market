import React from "react";
import productsData from "./productsData";
import { Link } from "react-router-dom";

const ApproveProvider = () => {
  const products = productsData.map(product => {
    return (
      <div key={product.id}>
        <h3>
          <Link to={`/admin/approveprovider/${product.id}`}>{product.name}</Link>
        </h3>
        <p>Price: ${product.price}</p>
        <hr />
      </div>
    );
  });

  return (
    <>
      <h1>ApproveProvider Page</h1>
      {products}
    </>
  );
};

export default ApproveProvider;