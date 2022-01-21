import React, { useState } from 'react';
import './statistical.scss';
import ProductStatistics from './productStatistics/ProductStatistics';
import UserStatistics from './userStatistics/UserStatistics';

const StatisticsComponent = () => {
	const [ type, setType ] = useState(1);
	return (
		<section className='statistics'>
			<section className='statistics__type'>
				<article className='statistics__type-item' onClick={() => setType(1)}>
					Thống Kê Mặt Hàng Thiết Yếu
				</article>

				<article className='statistics__type-item' onClick={() => setType(2)}>
					Thống Kê Người Dùng Ở Từng Vùng
				</article>
			</section>

			<section className='statistics__chartjs'>
				{type === 2 && <UserStatistics />}
				{type === 1 && <ProductStatistics />}
			</section>
		</section>
	);
};

export default StatisticsComponent;
