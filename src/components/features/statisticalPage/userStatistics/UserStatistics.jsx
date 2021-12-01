import React, { useState } from 'react';
import 'chart.piecelabel.js';
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
			data            : [ 576, 3456, 34, 234 ],
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
				let sum = 0;
				let dataArr = ctx.chart.data.datasets[0].data;
				dataArr.map(data => {
					sum += data;
				});
				let percentage = (value * 100 / sum).toFixed(2) + '%';
				return percentage;
			},
			color     : '#fff',
		},
	},
};

const UserStatistics = () => {
	const [ data, setData ] = useState({
		labels   : [],
		datasets : [
			{
				data            : [],
				backgroundColor : [],
				borderColor     : [],
				borderWidth     : 1,
			},
		],
	});

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
		<section className='user-statistics'>
			<article className='user-statistics-tabs'>
				<div onClick={() => handleClickRole('seller')}>Nguoi mua</div>
				<div onClick={() => handleClickRole('buyer')}>Nguoi Ban</div>
				<div onClick={() => handleClickRole('shipper')}>Shipper</div>
			</article>

			<article className='user-statistics-chart'>
				<Pie data={data} className='usc' options={option} />
			</article>
		</section>
	);
};

export default UserStatistics;
