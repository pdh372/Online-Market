import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Descriptions, Badge, Row, Col } from 'antd';
import productApi from 'apis/product';
import ProductsByStore from '../products/productsByStore/productByStore';
import storeApi from 'apis/store';

const StoreDetail = () => {
	const { id } = useParams();
	const [products, setProducts] = useState(null);
	const [store, setStore] = useState(null);
	// const store = {
	// 	_id: '61e6c44d8468206c684f0364',
	// 	owner: '61e6c44c8468206c684f0363',
	// 	name: 'BigC',
	// 	type: 'Kinh doanh',
	// 	address: {
	// 		area: '61e960b26110039c1266073a',
	// 		streetNo: '134/3 Nguyễn Văn A',
	// 	},
	// };

	useEffect(() => {
		// const getProductsByStore = async (id) => {
		// 	const productsData = await productApi.get.getProductByStore(id);
		// 	setProducts(productsData);
		// };
		// const getStore = async (id) => {
		// 	const storeData = await storeApi.get.getById(id);
		// 	console.log(storeData[0]);
		// 	setStore(storeData[0]);
		// };
		// getStore(id);
		// getProductsByStore(store._id);
		const getData = async (id) => {
			const storeData = await storeApi.get.getById(id);
			const productsData = await productApi.get.getProductByStore(
				storeData[0]._id
			);
			setStore(storeData[0]);
			setProducts(productsData);
		};
		getData(id);
	}, [id]);

	return (
		products && (
			<div>
				<Row>
					<Col span={16} offset={4}>
						<Descriptions title={`Cửa hàng ${store.name}`} bordered>
							<Descriptions.Item label='Tên cửa hàng'>
								{store.name}
							</Descriptions.Item>
							<Descriptions.Item label='Loại cửa hàng'>
								{store.type}
							</Descriptions.Item>
							<Descriptions.Item label='Ngày đăng ký'>
								2018-04-24 18:00:00
							</Descriptions.Item>
							<Descriptions.Item label='Địa chỉ' span={3}>
								{store.address.streetNo}
							</Descriptions.Item>
							<Descriptions.Item label='Thời gian mở cửa'>
								09:00:00
							</Descriptions.Item>
							<Descriptions.Item label='Thời gian đóng cửa'>
								18:00:00
							</Descriptions.Item>
							<Descriptions.Item label='Status' span={3}>
								<Badge status='processing' text='Open' />
							</Descriptions.Item>
						</Descriptions>
					</Col>
				</Row>
				<Row>
					<Col span={16} offset={4}>
						<h2>Sản phẩm của cửa hàng</h2>
						<ProductsByStore products={products} />
					</Col>
				</Row>
			</div>
		)
	);
};

export default StoreDetail;
