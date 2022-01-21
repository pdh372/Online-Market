import ContainerPage from '../../components/shared/containerPage/ContainerPage';
import OrderManagementComponent from '../../components/features/orderManagement/OrderManagement';

const OrderManagement = () => {
	return (
		<ContainerPage>
			<main className='delivery-history-page'>
				<OrderManagementComponent />
			</main>
		</ContainerPage>
	);
};

export default OrderManagement;
