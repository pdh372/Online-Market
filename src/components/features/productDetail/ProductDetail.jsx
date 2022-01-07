import React from "react"
import { useParams } from "react-router-dom"
// import productsData from "../products/productsData"
import { Form, InputNumber, Button } from 'antd';
import './productDetail.scss';
import { useEffect, useState } from 'react';
import apiProduct from 'apis/product';


const ProductDetail = () => {
    const [thisProduct, setThisProducts] = useState(null);

    const params = useParams()
 
    useEffect(() => {
        const getData = async () => {
            const productData = await apiProduct.get.getProductById(params.productId);
   
            setThisProducts(productData);
        }
        getData()
    }, [params.productId])

  

    const onFinish = (values) => {
        console.log(values);
    };

    return (thisProduct && <div className="product">
        <div className="avt">
            <img width="350px" height="350px" src={thisProduct.image} alt="" />
        </div>
        <div className="info">
            <h1>{thisProduct.name}</h1>
            <h2 className="price">{thisProduct.price} VNĐ/{thisProduct.unit}</h2>
            <div className="des">
                <h3>{thisProduct.description}</h3>
            </div>
            <Form onFinish={onFinish} >
                <h2>
                    <Form.Item label="Số lượng">
                        <InputNumber min={0} defaultValue={0} />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>
                            Thêm vào giỏ
                        </Button>
                    </Form.Item>
                </h2>
            </Form>
        </div>
    </div >)
}

export default ProductDetail