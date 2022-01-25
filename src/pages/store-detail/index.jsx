import StoreDetail from 'components/features/storeDetail/StoreDetail';
import ContainerPage from 'components/shared/containerPage/ContainerPage';

const StoreDetailPage = () => {
	return (
		<ContainerPage>
			<main className='store-detail-page'>
				<StoreDetail></StoreDetail>
			</main>
		</ContainerPage>
	);
};

export default StoreDetailPage;
