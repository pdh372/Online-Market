import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const columns = [
	{
		name     : 'Mã Đơn Hàng',
		selector : row => row._id,
		sortable : true,
		center   : true,
	},
	{
		name     : 'Tên Sản Phẩm',
		selector : row => row.name,
		sortable : true,
		center   : true,
	},
	{
		name     : 'Thời Gian Nhận',
		selector : row => row.startTime,
		sortable : true,
		center   : true,
	},
	{
		name     : 'Thời Gian Giao',
		selector : row => row.endTime,
		sortable : true,
		center   : true,
	},
	{
		name     : 'Giá Trị Sản Phẩm',
		selector : row => row.totalPrice,
		sortable : true,
		center   : true,
	},
	{
		name     : 'Địa Điểm Giao Hàng',
		selector : row => row.diaDiemGiaoHang,
		sortable : true,
		center   : true,
	},
	{
		name     : 'Địa Điểm Nhận Hàng',
		selector : row => row.diaDiemNhanHang,
		sortable : true,
		center   : true,
	},
	{
		name     : 'Số Điện Thoại Người Giao',
		selector : row => row.sdtNguoiGiao,
		sortable : true,
		center   : true,
	},
	{
		name     : 'Số Điện Thoại Người Nhận',
		selector : row => row.sdtNguoiNhan,
		sortable : true,
		center   : true,
	},

	// {
	// 	name     : 'Địa Điểm Nhận',
	// 	selector : row => row.action,
	// 	sortable : true,
	// 	center   : true,
	// 	cell     : row => {
	// 		return (
	// 			<div style={{ display: 'flex' }}>
	// 				<div>1</div>
	// 			</div>
	// 		);
	// 	},
	// },
];

const TableDeleveryHistory = () => {
	const [ data ] = useState([
		{
			_id             : '1',
			name            : 'Cá Chép',
			startTime       : '1-1-2021',
			endTime         : '2-1-2021',
			totalPrice      : '10000',
			diaDiemGiaoHang : 'Khu B',
			diaDiemNhanHang : 'Khu A',
			sdtNguoiGiao    : '092763721',
			sdtNguoiNhan    : '0169237113',
		},
		{
			_id             : '1',
			name            : 'Cá Chép',
			startTime       : '1-1-2021',
			endTime         : '2-1-2021',
			totalPrice      : '10000',
			diaDiemGiaoHang : 'Khu B',
			diaDiemNhanHang : 'Khu A',
			sdtNguoiGiao    : '092763721',
			sdtNguoiNhan    : '0169237113',
		},
		{
			_id             : '1',
			name            : 'Cá Chép',
			startTime       : '1-1-2021',
			endTime         : '2-1-2021',
			totalPrice      : '10000',
			diaDiemGiaoHang : 'Khu B',
			diaDiemNhanHang : 'Khu A',
			sdtNguoiGiao    : '092763721',
			sdtNguoiNhan    : '0169237113',
		},
		{
			_id             : '1',
			name            : 'Cá Chép',
			startTime       : '1-1-2021',
			endTime         : '2-1-2021',
			totalPrice      : '10000',
			diaDiemGiaoHang : 'Khu B',
			diaDiemNhanHang : 'Khu A',
			sdtNguoiGiao    : '092763721',
			sdtNguoiNhan    : '0169237113',
		},
		{
			_id             : '1',
			name            : 'Cá Chép',
			startTime       : '1-1-2021',
			endTime         : '2-1-2021',
			totalPrice      : '10000',
			diaDiemGiaoHang : 'Khu B',
			diaDiemNhanHang : 'Khu A',
			sdtNguoiGiao    : '092763721',
			sdtNguoiNhan    : '0169237113',
		},
		{
			_id             : '1',
			name            : 'Cá Chép',
			startTime       : '1-1-2021',
			endTime         : '2-1-2021',
			totalPrice      : '10000',
			diaDiemGiaoHang : 'Khu B',
			diaDiemNhanHang : 'Khu A',
			sdtNguoiGiao    : '092763721',
			sdtNguoiNhan    : '0169237113',
		},
	]);

	return (
		<section>
			<DataTable columns={columns} data={data} />
		</section>
	);
};

export default TableDeleveryHistory;
