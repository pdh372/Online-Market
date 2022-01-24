import rootApi from '../rootJava';
import dotNetApi from '../rootDotNet';
class Put {
	destroyOrder = id => {
		return rootApi.put(`/users/userID/orders/${id}/status`, { name: 'canceled' });
	};

	commissionOrder = id => {
		return rootApi.put('/orders/commission/' + id);
	};

	changeCurrentStatus = ({ orderId, currentStatus }) => {
		return dotNetApi.put(`/order/changeStatus/${orderId}/${currentStatus}`);
	};
}

export default new Put();
