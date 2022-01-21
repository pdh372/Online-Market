import ContainerPage from 'components/shared/containerPage/ContainerPage';
import CancelOrderComponent from 'components/features/orderTracking/cancelOrder/CancelOrder';

const CancelOrder = () => {
	return (
		<ContainerPage>
			<main className='delivery-history-page'>
				<CancelOrderComponent />
			</main>
		</ContainerPage>
	);
};

export default CancelOrder;
