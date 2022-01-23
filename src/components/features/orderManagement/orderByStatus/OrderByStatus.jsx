import React, { useEffect, useState, useRef } from 'react';
// table
import formatDateMongoose from 'helpers/formatDateMongoose';
import formatCurrency from 'helpers/formatCurrency';
import Table from 'components/elements/table/index';
import orderApi from 'apis/order';
import { Tag } from 'antd';
import DeleteAction from './action/delete';
import PutAction from './action/put';

const CancelOrder = ({ currentStatus, canDelete }) => {
	const [ data, setData ] = useState([]);

	const columns = useRef([
		{
			name     : 'Ngày Tạo Đơn',
			selector : row => row.orderDate,
			sortable : true,
			center   : true,
		},
		{
			name     : 'Ngày Giao',
			selector : row => row.deliveryDate,
			sortable : true,
			center   : true,
		},
		{
			name     : 'Tổng Đơn',
			selector : row => formatCurrency(row.total),
			sortable : true,
			center   : true,
		},
		{
			name     : 'Phí Giao',
			selector : row => formatCurrency(row.shippingFee),
			sortable : true,
			center   : true,
		},
		{
			name     : 'Trạng Thái',
			selector : row => row.currentStatus,
			sortable : true,
			center   : true,
		},
		{
			name     : 'Ngày Cập Nhật',
			selector : row => formatDateMongoose(row.upDatedtime),
			sortable : true,
			center   : true,
		},
		{
			name     : 'Hành Động',
			selector : row => row.customer,
			sortable : true,
			center   : true,
			cell     : row => {
				return (
					<React.Fragment>
						<div
							style={{ display: 'flex' }}
							onClick={() =>
								handleChangeStatus({ orderId: row._id, currentStatus: row.currentStatus, data })}
						>
							<Tag style={{ cursor: 'pointer', borderRadius: '5px' }}>
								<PutAction />
							</Tag>
						</div>
						<div style={{ display: 'flex' }} onClick={() => handleOrderCancel(row._id)}>
							<Tag style={{ cursor: 'pointer', borderRadius: '5px' }}>
								<DeleteAction />
							</Tag>
						</div>
					</React.Fragment>
				);
			},
		},
	]);

	const handleChangeStatus = async input => {
		const orders = await orderApi.get.orderByStatusAndUserId(currentStatus, '61b46287def70a3102757cf4');
		const message = await orderApi.get.changeCurrentStatus(input);
		console.log(message);
		const newOrders = orders.filter(o => o._id !== input.orderId);
		console.log(newOrders);
		setData(newOrders);
	};

	const handleOrderCancel = async id => {
		await orderApi.put.destroyOrder(id);
		const orders = await orderApi.get.orderByStatusAndUserId(currentStatus, '61b46287def70a3102757cf4');
		setData(orders);
	};

	useEffect(
		() => {
			const fetchData = async () => {
				const orders = await orderApi.get.orderByStatusAndUserId_DOTNET(
					currentStatus,
					'61b46287def70a3102757cf4',
				);

				setData(orders);
			};

			fetchData();
		},
		[ currentStatus ],
	);

	if (canDelete) {
		columns.current.pop();
	}

	return <Table columns={columns.current} data={data} />;
};

export default CancelOrder;
