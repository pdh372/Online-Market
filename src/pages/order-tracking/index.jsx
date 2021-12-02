import ContainerPage from '../../components/shared/containerPage/ContainerPage';
import OrderTrackingComponent from '../../components/features/orderTracking/index';

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
