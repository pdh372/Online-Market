import React from "react";
import './searchResult.scss';
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { Pagination } from 'antd';
import { useEffect, useState } from 'react';
import apiProduct from 'apis/product';

const Products = () => {
  const [result, setResult] = useState([]);

  const params = useParams();

  useEffect(() => {
    const getProduct = async ()  => {
      const productsData = await apiProduct.get.getProductByKeyWord(params.keyWord)
          setResult(productsData);
    }
    getProduct()
  }, [params.keyWord])

  const renderProduct = (productsData) => {
    return productsData.map(product => {
      return (
        <div className="box" key={String(product._id)}>
          <div >
            <img width="180px" height="180px" src={product.image} alt="img"/>
            <h4>
              <Link to={`/products/${product._id}`}>{product.name}</Link>
            </h4>
            <p>Giá: {product.price.toLocaleString()} VNĐ/{product.unit}</p>
          </div>
        </div>
      )});
  }

  return (
    <>
      
      <div className="list">
        <h2>Có {result.length} kết quả được tìm thấy</h2>
        {renderProduct(result)}
      </div>
      <div className="list">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </>
  );
};

export default Products;