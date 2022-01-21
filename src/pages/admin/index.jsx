import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ApproveProvider from '../../components/features/admin/approveProvider/ApproveProvider';
import ApproveShipper from '../../components/features/admin/approveShipper/ApproveShipper';
import ContainerPage from '../../components/shared/containerPage/ContainerPage';

const AdminPage = () => {
	const params = useParams();

	const handleRouter = () => {
		if (params.name === 'approveprovider') {
			return <ApproveProvider />;
		}
		else if (params.name === 'approveshipper') {
			return <ApproveShipper />;
		}
		else {
			return <Navigate to='404' />;
		}
	};

	return (
		<ContainerPage>
			<main className='admin-page'>{handleRouter()}</main>
		</ContainerPage>
	);
};

export default AdminPage;
