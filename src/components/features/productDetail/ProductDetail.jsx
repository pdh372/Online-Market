import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import productsData from "../products/productsData"
import { Form, InputNumber, Button } from 'antd';
import './productDetail.scss';
import { useEffect, useState } from 'react';
import apiProduct from 'apis/product';
import orderApi from 'apis/order';
import originService from 'helpers/originService';

const ProductDetail = () => {
	const [thisProduct, setThisProducts] = useState(null);
	const [quantity, setQuantity] = useState(0);

	const params = useParams();

	useEffect(() => {
		const getData = async () => {
			const productData = await apiProduct.get.getProductById(params.productId);
			productData.product.origin = originService.getOrigin();
			console.log(productData);
			setThisProducts(productData);
		};
		getData();
	}, [params.productId]);

	const onFinish = (values) => {
		console.log(values);
	};

	const navigate = useNavigate();

	const handleSubmit = async () => {
		let order = {
			products: [
				{
					productId: thisProduct.product._id,
					quantity,
					unitPrice: thisProduct.product.price,
				},
			],
			provider: thisProduct.product.store,
		};
		try {
			await orderApi.post(order);
			navigate('/');
		} catch (e) {
			window.alert(e);
		}
	};

	const onChange = (e) => {
		const newQuantity = quantity + 1;
		setQuantity(newQuantity);
	};
	return (
		thisProduct && (
			<div className='product'>
				<div className='avt'>
					<img width='350px' src={thisProduct.product.image} alt='' />
				</div>
				<div className='infom'>
					<h1>{thisProduct.product.name}</h1>
					<h2 className='price'>
						{thisProduct.product.price.toLocaleString()} VNĐ/
						{thisProduct.product.unit}
					</h2>
					<h4>Nguồn gốc xuất xứ: {thisProduct.product.origin}</h4>
					<h4>{thisProduct.store.name}</h4>
					<div className='des'>
						<p>{thisProduct.product.description}</p>
					</div>
					<Form onFinish={onFinish}>
						<h1>
							<Form.Item label='Số lượng'>
								<InputNumber
									min={0}
									defaultValue={0}
									value={quantity}
									onChange={onChange}
								/>
							</Form.Item>
							<Form.Item>
								<Button type='primary' htmlType='submit' onClick={handleSubmit}>
									Mua luôn
								</Button>
							</Form.Item>
						</h1>
					</Form>
				</div>
			</div>
		)
	);
};

export default ProductDetail;
