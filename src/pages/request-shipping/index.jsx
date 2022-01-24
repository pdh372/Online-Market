import RequestShippingComponent from 'components/features/requestShipping/RequestShipping';

const {
	default: ContainerPage,
} = require('components/shared/containerPage/ContainerPage');

const RequestShipping = () => {
	return (
		<ContainerPage>
			<main className='request-shipping-page'>
				<RequestShippingComponent></RequestShippingComponent>
			</main>
		</ContainerPage>
	);
};

export default RequestShipping;
