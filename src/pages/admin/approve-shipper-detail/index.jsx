//import { useParams, Navigate } from 'react-router-dom';
import ContainerPage from 'components/shared/containerPage/ContainerPage';
import ApproveShipperDetail from '../../../components/features/admin/approveShipper/approveShipperDetail/ApproveShipperDetail';

const ApproveShipperDetailPage = () => {
    return (
		<ContainerPage>
			<main className='product-page'>
				<ApproveShipperDetail />
			</main>
		</ContainerPage>
	);
};

export default ApproveShipperDetailPage;