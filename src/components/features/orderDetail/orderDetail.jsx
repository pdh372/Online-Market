import React, { useEffect, useState } from 'react';
import productApi from 'apis/product';

const OrderDetail = props => {
	const { detail } = props;
	const [ products, setProducts ] = useState([]);

	useEffect(
		() => {
			// console.log(detail.products);
			const getProducts = async () => {
				const productData = [];
				for (let i = 0; i < detail.products.length; i++) {
					const data = await productApi.get.getProductById(detail.products[i].productId);
					data.product.quantity = detail.products[i].quantity;
					productData.push(data);
				}
				setProducts(productData);
			};

			getProducts();
		},
		[ detail.products ],
	);

	const renderInfo = () => {
		return (
			<React.Fragment>
				<div className='user-profile'>
					<div className='title'>Tổng tiền</div>
					<div className='info'>{detail.total.toLocaleString()} VNĐ</div>

					<div className='title'>Ngày đặt hàng</div>
					<div className='info'>{detail.orderDate}</div>

					<div className='title'>Ngày giao dự kiến</div>
					<div className='info'>{detail.deliveryDate}</div>

					<div className='title'>Trạng thái</div>
					<div className='info'>{detail.currentStatus}</div>
				</div>
				<br />
			</React.Fragment>
		);
	};

	return (
		<React.Fragment>
			<div className='container'>
				<h1>Thông tin đơn hàng</h1>
				{renderInfo()}
				<h2>Danh sách sản phẩm</h2>
				{products.map((item, index) => (
					<React.Fragment key={index}>
						<div className='user-profile'>
							<div className='title'>Tên</div>
							<div className='info'>{item.product.name}</div>

							<div className='title'>Đơn giá</div>
							<div className='info'>{item.product.price}</div>

							<div className='title'>Số lượng</div>
							<div className='info'>{item.product.quantity}</div>

							<div className='title'>Người bán</div>
							<div className='info'>{item.store.name}</div>
						</div>
						<br />
					</React.Fragment>
				))}
			</div>
		</React.Fragment>
	);
};

export default OrderDetail;
