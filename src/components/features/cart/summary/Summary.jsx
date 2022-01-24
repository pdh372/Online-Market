import React from 'react';
import formatCurrency from 'helpers/formatCurrency';
import orderApi from '../../../../apis/order/index';

const Summary = ({ subTotal, products, setProducts }) => {
	const total = subTotal;

	const handleCheckout = async () => {
		const newProduct = products.map(p => ({
			productId : p._id,
			quantity  : p.quantity,
			unitPrice : p.price,
		}));

		const order = {
			userId       : '61b46287def70a3102757cf4',
			orderDate    : Date.now(),
			deliveryDate : Date.now(),
			total,
			products     : [ ...newProduct ],
			shipper      : '61e6c63996db5613e2addf31',
			orderFee     : 8000,
			shippingFee  : 3000,
			shipperFee   : 2940,
			providerFee  : 7600,
			updatedtime  : Date.now(),
		};

		const data = await orderApi.postClass.createOrder(order);
		console.log(data);

		// localStorage.removeItem('cart');
		// setProducts([]);
	};

	return (
		<section className='container-huy'>
			<div className='promotion' />

			<div className='summary'>
				<ul>
					<li className='total'>
						Tổng thiệt hại <span>{formatCurrency(total)}</span>
					</li>
				</ul>
			</div>

			<div className='checkout' style={{ paddingBottom: '100px' }}>
				<button type='button' onClick={handleCheckout}>
					Thanh Toán
				</button>
			</div>
		</section>
	);
};

export default Summary;
