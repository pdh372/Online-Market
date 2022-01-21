import React, { useState } from 'react';
import statisticalApi from '../../../../apis/statistic/index';
import { formatUserToStatistic } from '../../../../helpers/formatUserToStatistic';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie } from 'react-chartjs-2';
import './userStatistics.scss';

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

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
	const [ data, setData ] = useState({
		labels   : [],
		datasets : [
			{
				data            : [ 0, 0, 0, 0, 0 ],
				backgroundColor : [ '#80caa1', '#e1da96', '#fa874d', '#ad0303' ],
				borderColor     : [ '#56a87b', '#b6ad61', '#e06d33', '#7a0404' ],
				borderWidth     : 1,
			},
		],
	});

	const handleClickRole = role => {
		fetchData(role);
	};

	const fetchData = async type => {
		const newData = JSON.parse(JSON.stringify(data));

		const dataFromBe = await statisticalApi.get.user();

		const userByType = dataFromBe.users.filter(user => user.role === type);
		dataFromBe.users = userByType;
		const result = formatUserToStatistic(dataFromBe);

		newData.labels = result.labels;
		newData.datasets[0].data = result.data;

		setData(newData);
	};

	return (
		<React.Fragment>
			<article className='user-statistics-tabs'>
				<div onClick={() => handleClickRole('customer')}>Nguoi mua</div>
				<div onClick={() => handleClickRole('provider')}>Nguoi Ban</div>
				<div onClick={() => handleClickRole('shipper')}>Shipper</div>
			</article>

			<article className='user-statistics-chart'>
				<Pie data={data} className='usc' options={option} />
			</article>
		</React.Fragment>
	);
};

export default UserStatistics;
