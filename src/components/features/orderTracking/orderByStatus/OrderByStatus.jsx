import React, { useEffect, useState, useRef } from 'react';
// table
import formatDateMongoose from 'helpers/formatDateMongoose';
import formatCurrency from 'helpers/formatCurrency';
import Table from 'components/elements/table/index';
import orderApi from 'apis/order';
import { AiOutlineDelete } from 'react-icons/ai';
import { Tag } from 'antd';

const CancelOrder = ({ currentStatus, canDelete }) => {
	const [ data, setData ] = useState([]);

	const columns = useRef([
		{
			name     : 'Name',
			selector : row => row.customer,
			sortable : true,
			center   : true,
		},
		{
			name     : 'Order Date',
			selector : row => row.orderDate,
			sortable : true,
			center   : true,
		},
		{
			name     : 'Delivery Date',
			selector : row => formatDateMongoose(row.deliveryDate),
			sortable : true,
			center   : true,
		},
		{
			name     : 'Total',
			selector : row => formatCurrency(row.total),
			sortable : true,
			center   : true,
		},
		{
			name     : 'Shipping Fee',
			selector : row => formatCurrency(row.shippingfee),
			sortable : true,
			center   : true,
		},
		{
			name     : 'Status',
			selector : row => row.currentStatus,
			sortable : true,
			center   : true,
		},
		{
			name     : 'UpDated time',
			selector : row => formatDateMongoose(row.upDatedtime),
			sortable : true,
			center   : true,
		},
		{
			name     : 'Action',
			selector : row => row.customer,
			sortable : true,
			center   : true,
			cell     : row => {
				return (
					<div style={{ display: 'flex' }} onClick={() => handleOrderCancel(row._id)}>
						<Tag style={{ cursor: 'pointer', backgroundColor: 'red', borderRadius: '5px' }}>
							<AiOutlineDelete />
						</Tag>
					</div>
				);
			},
		},
	]);

	const handleOrderCancel = async id => {
		await orderApi.put.destroyOrder(id);
		const orders = await orderApi.get.orderByStatusAndUserId(currentStatus, '61b46287def70a3102757cf4');
		setData(orders);
	};

	useEffect(
		() => {
			const fetchData = async () => {
				const orders = await orderApi.get.orderByStatusAndUserId(currentStatus, '61b46287def70a3102757cf4');

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
