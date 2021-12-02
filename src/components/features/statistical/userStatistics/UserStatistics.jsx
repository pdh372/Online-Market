import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie } from 'react-chartjs-2';
import './userStatistics.scss';

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

const dataSeller = {
	labels   : [ 'Vùng Xanh', 'Vùng Vàng', 'Vùng Cam', 'Vùng Đỏ' ],
	datasets : [
		{
			data            : [ 124, 32, 54, 56 ],
			backgroundColor : [ '#80caa1', '#e1da96', '#fa874d', '#ad0303' ],
			borderColor     : [ '#56a87b', '#b6ad61', '#e06d33', '#7a0404' ],
			borderWidth     : 1,
		},
	],
};

const dataBuyer = {
	labels   : [ 'Vùng Xanh', 'Vùng Vàng', 'Vùng Cam', 'Vùng Đỏ' ],
	datasets : [
		{
			data            : [ 12, 32, 34, 45 ],
			backgroundColor : [ '#80caa1', '#e1da96', '#fa874d', '#ad0303' ],
			borderColor     : [ '#56a87b', '#b6ad61', '#e06d33', '#7a0404' ],
			borderWidth     : 1,
		},
	],
};

const dataShipper = {
	labels   : [ 'Vùng Xanh', 'Vùng Vàng', 'Vùng Cam', 'Vùng Đỏ' ],
	datasets : [
		{
			data            : [ 576, 345, 123, 234 ],
			backgroundColor : [ '#80caa1', '#e1da96', '#fa874d', '#ad0303' ],
			borderColor     : [ '#56a87b', '#b6ad61', '#e06d33', '#7a0404' ],
			borderWidth     : 1,
		},
	],
};

const option = {
	plugins : {
		tooltip    : {
			callbacks : {
				title : function () {
					return 'Tổng Số Lượng';
				},
			},
		},
		legend     : { display: true },
		title      : {
			display  : true,
			text     : 'Thống Kê',
			position : 'top',
		},
		datalabels : {
			formatter : (value, ctx) => {
				let dataArr = ctx.chart.data.datasets[0].data;
				let sum = dataArr.reduce((result, data) => result + data);
				let percentage = (value * 100 / sum).toFixed(2) + '%';
				return percentage;
			},
			color     : '#fff',
		},
	},
};

const UserStatistics = () => {
	const [ data, setData ] = useState(dataSeller);

	const handleClickRole = role => {
		if (role === 'seller') {
			setData(dataSeller);
		}
		else if (role === 'buyer') {
			setData(dataBuyer);
		}
		else if (role === 'shipper') {
			setData(dataShipper);
		}
	};

	return (
		<React.Fragment>
			<article className='user-statistics-tabs'>
				<div onClick={() => handleClickRole('buyer')}>Nguoi mua</div>
				<div onClick={() => handleClickRole('seller')}>Nguoi Ban</div>
				<div onClick={() => handleClickRole('shipper')}>Shipper</div>
			</article>

			<article className='user-statistics-chart'>
				<Pie data={data} className='usc' options={option} />
			</article>
		</React.Fragment>
	);
};

export default UserStatistics;
