import React from 'react';
import formatCurrency from 'helpers/formatCurrency';

const Summary = ({ subTotal }) => {
	const total = subTotal;

	return (
		<section className='container'>
			<div className='promotion' />

			<div className='summary'>
				<ul>
					{/* <li>
						Tổng giá trị sản phẩm chưa thuế <span>{formatCurrency(subTotal)}</span>
					</li> */}
					{/* <li>
						Thuế <span>{formatCurrency(tax)}</span>
					</li> */}
					<li className='total'>
						Tổng thiệt hại <span>{formatCurrency(total)}</span>
					</li>
				</ul>
			</div>

			<div className='checkout'>
				<button type='button'>Thanh Toán</button>
			</div>
		</section>
	);
};

export default Summary;
