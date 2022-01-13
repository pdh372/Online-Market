import React from "react";
import './products.scss';
import apiProduct from 'apis/product';
import { Link } from "react-router-dom";
import { Pagination } from 'antd';
import { useEffect, useState } from 'react';

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async ()  => {
      const productsData = await apiProduct.get.getProducts();
      setProducts(productsData);
    }
    getProduct()
  }, [])

  const renderProduct = (productsData) => {
    return productsData.map(product => {
      return (
        <div className="box" key={product._id.timestamp}>
          <div >
            <img width="180px" height="180px" src={product.image} alt="img"/>
            <h4>
              <Link to={`/products/${product._id}`}>{product.name}</Link>
            </h4>
            <p>Price: ${product.price}</p>
          </div>
        </div>
      )});
  }

  return (
    <>
      <h1>Products Page</h1>
      <div className="list">
        {renderProduct(products)}
      </div>
      <div className="list">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </>
  );
};

export default Products;