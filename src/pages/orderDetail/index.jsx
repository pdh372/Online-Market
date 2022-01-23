import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ContainerPage from 'components/shared/containerPage/ContainerPage';
import OrderDetail from 'components/features/orderDetail/orderDetail';

import orderApi from 'apis/order';

const OrderDetailPage = () => {
	const { orderId } = useParams();
	const [ order, setOrder ] = useState({});
	const [ isLoading, setIsLoading ] = useState(true);

	useEffect(
		() => {
			const getOrderDetail = async id => {
				const orderData = await orderApi.get.orderById(id);
				setOrder(orderData);
			};

			getOrderDetail(orderId);
			setIsLoading(false);
		},
		[ orderId ],
	);

	if (isLoading) {
		return (
			<React.Fragment>
				<ContainerPage>
					<p>loading...</p>
				</ContainerPage>
			</React.Fragment>
		);
	}
	else {
		return (
			<React.Fragment>
				<ContainerPage>
					<OrderDetail detail={order} />
				</ContainerPage>
			</React.Fragment>
		);
	}
};

export default OrderDetailPage;
