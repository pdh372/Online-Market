import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import orderApi from '../../../../apis/order/index';

const columns = [
	{
		name     : 'Mã Đơn Hàng',
		selector : row => row._id,
		sortable : true,
		center   : true,
	},
	{
		name     : 'Tình Trạng',
		selector : row => row.currentStatus,
		sortable : true,
		center   : true,
	},
	{
		name     : 'Phí Giao Hàng',
		selector : row => row.shippingFee,
		sortable : true,
		center   : true,
	},
	{
		name     : 'Giá Trị Sản Phẩm',
		selector : row => row.total,
		sortable : true,
		center   : true,
	},
	{
		name     : 'Ngày Đặt',
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
];

const TableDeleveryHistory = () => {
	const [ data, setData ] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const orders = await orderApi.get.orderByShipper();

			console.log(orders);
			console.log(orders.map(o => o.shippingfee));

			setData(orders);
		};

		fetchData();
	}, []);

	return (
		<section>
			<DataTable columns={columns} data={data} />
		</section>
	);
};

export default TableDeleveryHistory;
