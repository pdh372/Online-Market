import React, { useEffect, useState } from 'react';
import { Table, Button } from 'antd';
import orderApi from 'apis/order';

const RequestShippingComponent = () => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const getOrders = async () => {
			let data = await orderApi.get.orderByStatus('preparing');
			setOrders(data);
		};
		getOrders();
	}, []);

	const handleSend = async (orderId) => {
		let currentOrders = [...orders];
		try {
			setOrders(currentOrders.filter((order) => order._id !== orderId));
			await orderApi.get.changeStatus(orderId, 'preparing');
		} catch (e) {
			setOrders(currentOrders);
			alert(e);
		}
	};

	const columns = [
		{
			title: 'Mã đơn hàng',
			dataIndex: '_id',
			key: '_id',
			align: 'left',
		},
		{
			title: 'Ngày đặt',
			dataIndex: 'orderDate',
			key: 'orderDate',
			align: 'left',
		},
		{
			title: 'Sản phẩm',
			dataIndex: 'products',
			key: '_id',
			align: 'left',

			render: (item) => (
				<div>
					<p>Mã sản phẩm: {item[0].productId}</p>
					<p>Số lượng: {item[0].quantity}</p>
					<p>Đơn giá: {item[0].unitPrice}</p>
				</div>
			),
		},
		{
			title: 'Thành tiền',
			dataIndex: 'providerFee',
			key: 'providerFee',
			align: 'left',
		},
		{
			title: 'Trạng thái',
			dataIndex: 'currentStatus',
			key: 'currentStatus',
			align: 'left',
		},
		{
			title: 'Action',
			dataIndex: '_id',
			key: '_id',
			render: (_id) => (
				<Button onClick={() => handleSend(_id)}>Gửi yêu cầu vận chuyển</Button>
			),
			align: 'left',
		},
	];
	return (
		<>
			<Table dataSource={orders} columns={columns} rowKey='_id'></Table>
		</>
	);
};

export default RequestShippingComponent;
