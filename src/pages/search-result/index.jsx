//import { useParams, Navigate } from 'react-router-dom';
import ContainerPage from 'components/shared/containerPage/ContainerPage';
import SearchResult from '../../components/features/searchResult/SearchResult';
//import Products from '../../components/features/products/Products';

const SearchResultPage = () => {
	return (
		<ContainerPage>
			<main className='result-page'>
				<SearchResult />
			</main>
		</ContainerPage>
	);
};

export default SearchResultPage;