import ContainerPage from '../../components/shared/containerPage/ContainerPage';
import OrderTrackingComponent from '../../components/features/orderTracking/OrderTracking';

const OrderManagement = () => {
	return (
		<ContainerPage>
			<main className='delivery-history-page'>
				<OrderTrackingComponent />
			</main>
		</ContainerPage>
	);
};

export default OrderManagement;
