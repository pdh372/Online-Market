import React, { useState } from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

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

const labels = [ 'Rau', 'Thịt', 'Cá', 'Dầu ăn', 'Mắm', 'Tương Ớt', 'Muối' ];

const ProductStatistics = () => {
	const [ data ] = useState({
		labels,
		datasets : [
			{
				label           : 'Dataset 1',
				data            : labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
				backgroundColor : 'rgba(255, 99, 132, 0.5)',
			},
		],
	});

	return (
		<article className='product-statistics-chart'>
			<Bar options={options} data={data} />
		</article>
	);
};

export default ProductStatistics;
