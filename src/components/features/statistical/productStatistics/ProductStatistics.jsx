import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { formatProductToStatistic } from '../../../../helpers/formatProductToStatistic';
import statisticalApi from '../../../../apis/statistic/index';
import './productStatistics.scss';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
	responsive : true,
	plugins    : {
		legend : {
			position : 'top',
		},
		title  : {
			display : true,
			text    : 'Thống Kê Mặt Hàng Thiết Yếu',
		},
	},
};

const ProductStatistics = () => {
	const [ data, setData ] = useState({
		labels   : [],
		datasets : [
			{
				label           : 'Loại Sản Phẩm',
				data            : [],
				backgroundColor : 'rgba(255, 99, 132, 0.5)',
			},
		],
	});

	useEffect(() => {
		const fetchData = async () => {
			const newData = JSON.parse(JSON.stringify(data));
			const dataFromBe = await statisticalApi.get.product();

			const result = formatProductToStatistic(dataFromBe);

			newData.labels = result.labels;
			newData.datasets[0].data = result.data;

			console.log(newData);

			setData(newData);
		};

		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<article className='product-statistics-chart'>
			<Bar options={options} data={data} />
		</article>
	);
};

export default ProductStatistics;
