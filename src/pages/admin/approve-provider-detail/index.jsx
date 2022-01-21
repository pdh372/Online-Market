//import { useParams, Navigate } from 'react-router-dom';
import ContainerPage from 'components/shared/containerPage/ContainerPage';
import ApproveProviderDetail from '../../../components/features/admin/approveProvider/approveProviderDetail/ApproveProviderDetail';

const ApproveProviderDetailPage = () => {
    return (
		<ContainerPage>
			<main className='product-page'>
				<ApproveProviderDetail />
			</main>
		</ContainerPage>
	);
};

export default ApproveProviderDetailPage;