import React, { useEffect, useState } from 'react';
// table
import formatDateMongoose from 'helpers/formatDateMongoose';
import formatCurrency from 'helpers/formatCurrency';
import Table from 'components/elements/table/index';
import orderApi from 'apis/order';

const CancelOrder = ({ currentStatus }) => {
	const [ data, setData ] = useState([]);

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

	return <Table columns={columns} data={data} />;
};

export default CancelOrder;

export const columns = [
	{
		name     : 'Name',
		selector : row => row.customer,
		sortable : true,
		center   : true,
	},
	{
		name     : 'orderDate',
		selector : row => row.orderDate,
		sortable : true,
		center   : true,
	},
	{
		name     : 'deliveryDate',
		selector : row => formatDateMongoose(row.deliveryDate),
		sortable : true,
		center   : true,
	},
	{
		name     : 'total',
		selector : row => formatCurrency(row.total),
		sortable : true,
		center   : true,
	},
	{
		name     : 'shippingfee',
		selector : row => formatCurrency(row.shippingfee),
		sortable : true,
		center   : true,
	},
	{
		name     : 'status',
		selector : row => row.currentStatus,
		sortable : true,
		center   : true,
	},
	{
		name     : 'upDatedtime',
		selector : row => formatDateMongoose(row.upDatedtime),
		sortable : true,
		center   : true,
	},
	// {
	// 	name     : 'action',
	// 	selector : row => row.customer,
	// 	sortable : true,
	// 	center   : true,
	// 	cell     : row => {
	// 		return (
	// 			<div style={{ display: 'flex' }}>
	// 				<DeleteAction />
	// 			</div>
	// 		);
	// 	},
	// },
];
