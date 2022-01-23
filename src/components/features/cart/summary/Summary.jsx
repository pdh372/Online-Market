import React from 'react';
import formatCurrency from 'helpers/formatCurrency';

const Summary = ({ subTotal }) => {
	const total = subTotal;

	return (
		<section className='container'>
			<div className='promotion' />

			<div className='summary'>
				<ul>
					<li className='total'>
						Tổng thiệt hại <span>{formatCurrency(total)}</span>
					</li>
				</ul>
			</div>

			<div className='checkout' style={{ paddingBottom: '100px' }}>
				<button type='button'>Thanh Toán</button>
			</div>
		</section>
	);
};

export default Summary;
