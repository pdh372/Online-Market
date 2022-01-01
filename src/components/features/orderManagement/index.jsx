import React from 'react';
// table
import DataTable from 'react-data-table-component';
import TableUserStyled from './index.styled';
import DeleteAction from './action/delete';
import PutAction from './action/put';
import data from './fakedata';
import formatDateMongoose from '../../../helpers/formatDateMongoose';
import formatCurrency from '../../../helpers/formatCurrency';

const columns = [
	{
		name     : 'Name',
		selector : row => row.customer,
		sortable : true,
		center   : true,
	},
	{
		name     : 'orderDate',
		selector : row => formatDateMongoose(row.orderDate),
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
		selector : row => row.status,
		sortable : true,
		center   : true,
	},
	{
		name     : 'upDatedtime',
		selector : row => formatDateMongoose(row.upDatedtime),
		sortable : true,
		center   : true,
	},
	{
		name     : 'action',
		selector : row => row.customer,
		sortable : true,
		center   : true,
		cell     : row => {
			return (
				<div style={{ display: 'flex' }}>
					<PutAction />
					<DeleteAction />
				</div>
			);
		},
	},
];

const OrderManagementComponent = () => {
	return (
		<TableUserStyled>
			<DataTable columns={columns} data={data} />
		</TableUserStyled>
	);
};

export default OrderManagementComponent;
