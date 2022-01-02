import ContainerPage from '../../components/shared/containerPage/ContainerPage';
import DeliveryHistoryComponent from '../../components/features/deleveryHistory/DeleveryHistory';

const DeliveryHistory = () => {
	return (
		<ContainerPage>
			<main className='delivery-history-page'>
				<DeliveryHistoryComponent />
			</main>
		</ContainerPage>
	);
};

export default DeliveryHistory;
