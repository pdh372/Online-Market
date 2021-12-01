import ContainerPage from '../../components/shared/containerPage/ContainerPage';
import UserStatistics from '../../components/features/statisticalPage/userStatistics/UserStatistics';
import './statisticalPage.scss';

const StatisticalPage = () => {
	return (
		<ContainerPage>
			<main className='statistic-page'>
				<section className='statistic-chart'>
					<UserStatistics />
				</section>
			</main>
		</ContainerPage>
	);
};

export default StatisticalPage;
