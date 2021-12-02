import ContainerPage from '../../components/shared/containerPage/ContainerPage';
import StatisticsComponent from '../../components/features/statisticalPage/index';
import './statisticalPage.scss';

const StatisticalPage = () => {
	return (
		<ContainerPage>
			<main className='statistic-page'>
				<section className='statistic-chart'>
					<StatisticsComponent />
				</section>
			</main>
		</ContainerPage>
	);
};

export default StatisticalPage;
