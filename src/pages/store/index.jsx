import ContainerPage from 'components/shared/containerPage/ContainerPage';
import { useParams, Navigate } from 'react-router-dom';
import ProfileStore from './profile';

const Store = () => {
	const params = useParams();

	const handleRouter = () => {
		if (params.name === 'profile') {
			return <ProfileStore />;
		}
		else {
			return <Navigate to='/404' />;
		}
	};

	return (
		<ContainerPage>
			<main className='store-page'>{handleRouter()}</main>
		</ContainerPage>
	);
};

export default Store;
